import React from 'react'

import { ColumnWrapper, ColumnTitle, Title, ColumnBody } from './styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCardButton from '../AddCardButton';
import { Button } from '@mui/material';
import NewCard from '../NewCard'
import CardDialog from '../CardDialog'
import ColumnDialog from '../ColumnDialog';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function({ column, reload }) {

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialogColumn, setOpenDialogColumn] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState({});
  const [selectedColumn, setSelectedColumn] = React.useState(null);
  const [movies, updateMovies] = React.useState(column.movies);

  const handleDragEnd = (e) => {
    console.log(e)
  }

  const handleDragStart = (e) => {
    //console.log(e)
  }

  const handleOpenDialog = (movie) => {
    setSelectedMovie(movie);
    setOpenDialog(true)
  }

  const handleClose = (registro) => {
    if (registro) {
      reload();
    }
    setOpenDialog(false);
    setOpenDialogColumn(false)
  };

  const handleOpenEditColumn = () => {
    setSelectedColumn(column)
    setOpenDialogColumn(true)
  }

  return (
    <>
      <ColumnWrapper key={String(Math.random())}>
        <ColumnTitle>
          <Title>
            {column.title}
          </Title>
          <Button sx={{ color: '#FFF' }} onClick={handleOpenEditColumn}>
            <MoreHorizIcon />
          </Button>
        </ColumnTitle>

        <DragDropContext onDragStart={handleDragStart} onDropEnd={handleDragEnd}>
          <Droppable droppableId="cards" type='cardsList'>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <ColumnBody>
                  {movies.map((movie, index) => (
                    <Draggable key={movie.id} draggableId={'cards' + movie.id.toString()} index={index}>
                      {(provided) => (
                        <div onClick={() => handleOpenDialog(movie) } {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <NewCard movie={movie} status={movie.status}/>  
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ColumnBody>
              </div>
            )}
          </Droppable>
        </DragDropContext>
        
        <CardDialog open={openDialog} onClose={handleClose} movie={selectedMovie}/>
        <AddCardButton columnid={column.id} />
      </ColumnWrapper>
      <ColumnDialog open={openDialogColumn} onClose={handleClose} column={selectedColumn}/>
    </>
  )
}