import { CircularProgress } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { toast } from 'react-toastify';
import AddColumnButton from '../../components/AddColumnButton';
import Column from '../../components/Column';
import ColumnDialog from '../../components/ColumnDialog'
import { httpApi } from '../../config'
import { auth } from '../../firebase'

import { WorkSpaceWrapper, WorkSpaceColumns, LoadingWrapper } from './styles'

export default function() {

  const [columns, setColumns] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [openDialog, setOpenDialog] = React.useState(false)

  async function createWorkSpace(user) {
    var promise = httpApi.post(`/workspaces/${user.id}`);
    toast.promise(
      promise, 
      {
        pending: 'Criando seu espaço de filmes...',
        success: 'Seu espaço de filmes está pronto!',
        error: 'Houve um erro ao criar seu perfil, tente novamente!'
      }
    ).then(() => {
      getAllColumnsByWorkspace();
    })
  }

  async function getUser() {
    const user = await httpApi.get(`/users/${auth.currentUser.email}`).then(response => response.data);

    return user;
  }

  const getAllColumnsByWorkspace = () => {
    setColumns([])
    setIsLoading(true)
    getUser().then((user) => {
      if (_.isEmpty(user.workspace)) {
        createWorkSpace(user);
      } else {
        setColumns(user.workspace.colunas);
      }
    }).then(() => {
      setIsLoading(false)
    })
  }

  const handleDragEnd = async (e) => {
    if (e.reason != 'DROP' || !e.destination) {
      return;
    }

    const { source, destination } = e;
    const movieId = e.draggableId;

    if (source.droppableId != destination.droppableId) {
      const movie = await httpApi.get(`/movies/${movieId}`).then(response => response.data);
      movie.columnId = destination.droppableId;
      httpApi.put(`/movies/${movie.id}`, movie).then(response => {
        getAllColumnsByWorkspace();
      });
    }
  }

  React.useEffect(() => {
    getAllColumnsByWorkspace();
  }, [])  

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = (column) => {
    if (column) {
      getAllColumnsByWorkspace()
    }
    setOpenDialog(false)
  }

  return (
    <>
      <WorkSpaceWrapper>
        {!columns.length && isLoading ? (
          <LoadingWrapper>
            <CircularProgress sx={{ color: '#fff' }} size={60} disableShrink />
          </LoadingWrapper>
        ) : ''}

        {!isLoading ? (
          <WorkSpaceColumns>
            <DragDropContext onDragEnd={handleDragEnd}>
              {columns.map(column => (
                <div key={column.id}>
                  <Column column={column} reload={getAllColumnsByWorkspace}/>
                </div>
              ))}
            </DragDropContext>
            <div style={{ height: '40px'}} onClick={handleOpenDialog}>
              <AddColumnButton />
            </div>
          </WorkSpaceColumns>
        ) : ''}

      </WorkSpaceWrapper>
      <ColumnDialog open={openDialog} onClose={handleCloseDialog}/>
    </>
  )
}