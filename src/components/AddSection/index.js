import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField } from '@mui/material';

import { Form } from './styles'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <>
      <Card sx={{ 
          minWidth: 300, 
          minHeight: 160,
          marginRight: 5, 
          background: 'transparent', 
          color: '#E7E7E7', 
          outlineStyle: 'dashed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all ease 0.3s',

          ":hover" : {
            background: '#474747',
            opacity: 0.2,
            color: '#FFF',
            transition: 'all ease 0.3s',
            cursor: 'pointer'
          }
        }} onClick={handleOpen}>
        <CardContent sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          + Add section
        </CardContent>
      </Card>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Adicionando Card"}</DialogTitle>
          <Form>
            <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Nome"
                  variant="standard"
                  sx={{ width: 500 }}
                />
            </DialogContent>
            <DialogActions>
              <Button variant='outlined' color="info" onClick={handleClose}>Fechar</Button>
              <Button variant='contained' color="primary" onClick={handleClose}>Salvar</Button>
            </DialogActions>
          </Form>
        </Dialog>
      </div>
    </>
    
  );
}