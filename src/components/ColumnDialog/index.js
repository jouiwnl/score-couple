import { Button, createTheme, Dialog, Slide, TextField, ThemeProvider } from '@mui/material'
import React from 'react'

import { CardWrapper, CardHeader, CardBody, ButtonWrapper } from './styles'

import { httpApi } from '../../config'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function({ open, onClose, column }) {

  const [coluna, setColuna] = React.useState({ title: '' })

  React.useEffect(() => {
    if (column) {
      setColuna(column)
    }
  }, [open])

  const handleClose = () => {
    setColuna({})
    onClose();
  };

  const handleSaveColumn = async () => {
    if (column) {
      coluna.id = column.id;
      return httpApi.put(`/columns/${column.id}`, coluna).then((response) => {
        onClose(coluna);
      })
    }

    return httpApi.post('/columns', coluna).then((response) => {
      onClose(coluna);
    })
  }

  const handleDelete = async () => {
    return httpApi.delete(`/columns/${column.id}`).then((response) => {
      onClose(coluna);
    })
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#faaf00',
        darker: '#053e85',
      }
    },
  });

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      maxWidth={'1200px'}
      id="dialogColumn"
    >
      <CardWrapper>
        <CardHeader>
          {column ? 'Editando' : 'Adicionando'} Coluna
        </CardHeader>
        <CardBody>
          <ThemeProvider theme={theme}>
            <TextField 
              onChange={(e) => setColuna({ title: e.target.value })} 
              label="Title" 
              color="primary" 
              fullWidth 
              focused 
              sx={{ input: { color: '#fff' } }}
              value={coluna.title || ''}
            />
          </ThemeProvider>
        </CardBody>
        <ButtonWrapper>
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined" 
              color="primary" 
              sx={{ color: '#FFF' }}
              onClick={handleSaveColumn}
              disabled={!coluna || !coluna.title}
            >
              Salvar
            </Button>

            {column && !column.movies.length? (
              <Button
                variant="contained" 
                color="primary" 
                sx={{ color: '#FFF' }}
                onClick={handleDelete}
                disabled={!coluna || !coluna.title}
              >
                Excluir
              </Button>
            ) : ''}
          </ThemeProvider>
        </ButtonWrapper>
      </CardWrapper>
    </Dialog>
  )
}