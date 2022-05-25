import React from 'react'

import { ColumnWrapper, ColumnTitle, Title, ColumnBody } from './styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCardButton from '../AddCardButton';
import { Button } from '@mui/material';
import NewCard from '../NewCard'
import CardDialog from '../CardDialog'
import ColumnDialog from '../ColumnDialog';
import { Droppable, Draggable } from 'react-beautiful-dnd'

export default function({ column, reload }) {

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialogColumn, setOpenDialogColumn] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState({});
  const [selectedColumn, setSelectedColumn] = React.useState(null);
  const [movies, updateMovies] = React.useState(column.movies);

  const handleOpenDialog = (movie) => {
    setSelectedMovie(movie);
    setOpenDialog(true)
  }

  const handleClose = (registro) => {
    if (registro) {
      reload();
    }
    setOpenDialogColumn(false)
    setOpenDialog(false);
  };

  const handleOpenEditColumn = () => {
    setSelectedColumn(column)
    setOpenDialogColumn(true)
  }

  return (
    <>
      <ColumnWrapper>
        <ColumnTitle>
          <Title>
            {column.title}
          </Title>
          <Button sx={{ color: '#FFF' }} onClick={handleOpenEditColumn}>
            <MoreHorizIcon />
          </Button>
        </ColumnTitle>

        <Droppable droppableId={column.id.toString()}>
          {(provided) => (
            <div style={{ minWidth: '322px' }} {...provided.droppableProps} ref={provided.innerRef}>
              <ColumnBody>
                {movies.map((movie, index) => (
                  <Draggable id={movie.id.toString()} key={movie.id} draggableId={movie.id.toString()} index={index}>
                    {(provided) => (
                      <div onClick={() => handleOpenDialog(movie) } {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <NewCard movie={movie} status={movie.status}/>  
                      </div>
                    )}
                  </Draggable>
                ))}
              </ColumnBody>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        
        <CardDialog open={openDialog} onClose={handleClose} movie={selectedMovie}/>
        <AddCardButton columnid={column.id} />
      </ColumnWrapper>
      <ColumnDialog open={openDialogColumn} onClose={handleClose} column={selectedColumn}/>
    </>
  )
}