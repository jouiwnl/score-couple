import React from 'react'
import { ClearButton, Form, Input } from './styles';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingWrapper } from '../../styles/global';
import Movies from '../Movies'
import { http } from '../../config';
import _ from 'lodash';

import { useParams } from 'react-router-dom'

export default function() {

  const { columnid } = useParams();

  const [isLoading, setLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    if (!_.isEmpty(search)) {
      setLoading(true);
      return http.get(search).then( ({ data }) => {
        setMovies(data.results);
      }).then(() => {
        setLoading(false);
      })
    } else {
      setMovies([]);
    }
  }

  const handleClear = (e) => {
    e.preventDefault()
    setSearch("")
    setMovies([])
  }

  return (
    <>
      <Form style={{ marginBottom: '100px' }}>
        <Input onKeyUp={ handleSearch } onChange={ handleSearch } value={search} placeholder="Título, personagem ou gênero" />
        <ClearButton onClick={ handleClear }>
          <CloseIcon />
        </ClearButton>
      </Form>

      {!movies.length && isLoading ? (
        <LoadingWrapper>
          <CircularProgress sx={{ color: '#fff' }} size={60} disableShrink />
        </LoadingWrapper>
      ) : ''}

      {movies.length && !isLoading ? (<Movies movies={movies} columnid={columnid}/>) : ''}
    </>
  )
}