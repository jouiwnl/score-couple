import { Grid } from '@mui/material'
import React from 'react'

import { Wrapper } from './styles'
import MovieCard from '../MovieCard'
import _ from 'lodash'
import CardDialog from '../CardDialog'

export default function({ movies, columnid }) {  

  const [definePageXL, setPageXL] = React.useState(2);
  const [definePageLG, setPageLG] = React.useState(4);
  const [open, setOpen] = React.useState(false);
  const [selectedMovie, setMovie] = React.useState(null);

  React.useEffect(() => {
    if (movies.length > 3) {
      setPageLG(3);
      return setPageXL(3)
    }

    if (movies.length < 3) {
      return setPageXL(6)
    }

    return setPageXL(4);
  }, [movies])

  const handleOpenDialog = () => {
    setOpen(true)
  }

  const handleCloseDialog = () => {
    setOpen(false)
    setMovie(null);
  }

  return (
    <>
      <Wrapper>
        <Grid container spacing={5} style={{ paddingBottom: '50px' }}>
          {movies.map(movie =>  {
            if (!_.isEmpty(movie.poster_path)) {
              return (
                <Grid onClick={handleOpenDialog} key={movie.id} item xs={12} sm={6} md={4} xl={definePageXL} lg={definePageLG}>
                  <div onClick={() => setMovie(movie.id)}>
                    <MovieCard movie={movie}/>
                  </div>
                </Grid>
              )
            }
          })}
        </Grid>
      </Wrapper>
      <CardDialog open={open} onClose={handleCloseDialog} movie={selectedMovie} columnid={columnid}/>
    </>
  )
}