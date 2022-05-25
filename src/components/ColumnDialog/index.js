import { Button, createTheme, Dialog, Slide, TextField, ThemeProvider } from '@mui/material'
import React from 'react'

import { CardWrapper, CardHeader, CardBody, ButtonWrapper } from './styles'

import { httpApi } from '../../config'
import { toast } from 'react-toastify';
import { auth } from '../../firebase';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function({ open, onClose, column }) {

  const [coluna, setColuna] = React.useState({ title: '' })

  async function getUser() {
    const user = await httpApi.get(`/users/${auth.currentUser.email}`).then(response => response.data);

    return user;
  }

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
    var promise = {};
    getUser().then(user => {
      coluna.workspace = user.workspace;
      if (column) {
        coluna.id = column.id;
        promise = httpApi.put(`/columns/${column.id}`, coluna).then((response) => {
          onClose(coluna);
        })
        return toast.promise(
          promise,
          {
            pending: 'Salvando registro',
            success: 'Registro salvo com sucesso!',
            error: 'Erro ao salvar registro!'
          }
        );
      }
  
      promise = httpApi.post('/columns', coluna).then((response) => {
        onClose(coluna);
      })
  
      return toast.promise(
        promise,
        {
          pending: 'Salvando registro',
          success: 'Registro salvo com sucesso!',
          error: 'Erro ao salvar registro!'
        }
      );
    })
  }

  const handleDelete = async () => {
    const promise = httpApi.delete(`/columns/${column.id}`).then((response) => {
      onClose(coluna);
    })

    toast.promise(
      promise, 
      {
        pending: 'Deletando coluna...',
        success: 'Coluna deletada!',
        error: 'Erro ao deletar coluna!'
      }
    )
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