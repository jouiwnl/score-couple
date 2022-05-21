import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import { API_KEY, httpApi } from '../../config'
import _ from 'lodash'

import { 
  CardWrapper, 
  LeftWrapper, 
  RightWrapper, 
  RightSideHeader, 
  Wrapper, 
  MovieInformation, 
  Information,
  MovieAvaliationDescription,
  ButtonWrapper,
  StatusWrapper
} from './styles';
import { useNavigate } from 'react-router-dom';
import { FormControl, TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ({ open, onClose, movie, columnid }) {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [movieValues, setMovieValues] = React.useState(null);

  const handleClose = () => {
    onClose();
  };

  React.useEffect(() => {
    if (movie) {
      if (movie != undefined && _.isNumber(movie)) {
        const API_URL_ID = `https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}&query=`;
        axios.get(API_URL_ID).then((response) => {
          setSelectedMovie(response.data)
        });
        return
      }

      setMovieValues(movie)
    }
  }, [movie])

  const handleRegisterMovie = () => {
    const movie = {
      name: selectedMovie.title,
      posterUrl: selectedMovie.poster_path,
      releaseDate: selectedMovie.release_date,
      runtime: selectedMovie.runtime,
      genre: selectedMovie.genres[0].name,
      movieDescription: selectedMovie.overview.split('.')[0]
    }

    httpApi.post(`/movies?columnid=${columnid}`, movie).then(() => {
      navigate('/')
    })
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setMovieValues({...movieValues, [name]: value});
  }

  const handleAvaliation = (aval) => {
    setMovieValues({...movieValues, score: aval})
  }

  const handleUpdate = () => {
    httpApi.put(`/movies/${movieValues.id}`, movieValues).then(() => {
      onClose(movieValues)
    })
  }

  const handleDelete = () => {
    httpApi.delete(`/movies/${movieValues.id}`).then((response) => {
      onClose(movieValues)
    })
  }

  const setImage = () => {
    if (!_.isEmpty(selectedMovie)) {
      return `https://image.tmdb.org/t/p/w400${selectedMovie.poster_path}`;
    }

    if (!_.isEmpty(movieValues)) {
      return `https://image.tmdb.org/t/p/w400${movieValues.posterUrl}`
    }

    return '';
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#faaf00',
        darker: '#053e85',
      },
      completed: {
        main: '#98FB98',
        darker: '#053e85',
      },
      canceled: {
        main: '#FA8072',
        darker: '#053e85',
      },
      notstarted: {
        main: '#464646',
        darker: '#053e85',
      }
    },
  });

  return (
    <Wrapper>
      {movieValues || selectedMovie ? (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          maxWidth={'1200px'}
          id="dialogCard"
        >
          <CardWrapper>
            <LeftWrapper image={setImage()}/>
            <RightWrapper>
              <RightSideHeader>
                { selectedMovie ? selectedMovie.title : movieValues.name }
              </RightSideHeader>
              <MovieInformation>
                <Information>
                  { selectedMovie ? selectedMovie.release_date : movieValues.releaseDate  }
                </Information>
                <Information>
                  { selectedMovie ? selectedMovie.runtime : movieValues.runtime } min
                </Information>
                <Information>
                  { selectedMovie ?selectedMovie.genres[0].name : movieValues.genre }
                </Information>
              </MovieInformation>
              {movieValues ? (
                <>
                  <MovieAvaliationDescription>
                      <span style={{ color: '#fff', paddingLeft: '20px', paddingRight: '20px',  paddingTop: '15px' }}>
                        {movieValues.movieDescription}.
                      </span>
                    <StatusWrapper>
                      <ThemeProvider theme={theme}>
                        <Select
                          value={movieValues.status || ''}
                          name="status"
                          onChange={handleInputChange}
                          fullWidth
                          color="primary"
                          sx={{ color: '#fff', fontWeight: '700', maxWidth: '200px', height: '40px' }}
                          className="Mui-focused"
                        >
                          <MenuItem value={'NOTSTARTED'}>A fazer</MenuItem>
                          <MenuItem value={'CANCELED'}>Cancelado</MenuItem>
                          <MenuItem value={'COMPLETED'}>Feito</MenuItem>
                          <MenuItem value={'DOING'}>Fazendo</MenuItem>
                        </Select>
                      </ThemeProvider>
                    </StatusWrapper>
                    { (movieValues.status === "DOING" || movieValues.status === "COMPLETED") && (
                      <Rating
                        name="simple-controlled"
                        value={movieValues.score || 0}
                        onChange={(e, newVal) => handleAvaliation(newVal)}
                        sx={{ label: { span: { color: '#faaf00' } }, marginTop: '23px' }}
                      />
                    )}
                  </MovieAvaliationDescription>
                  <ButtonWrapper>
                    <ThemeProvider theme={theme}>
                      <Button onClick={handleUpdate} variant="outlined" color="primary" sx={{ color: '#FFF' }}>Salvar</Button>
                      <Button onClick={handleDelete} variant="outlined" color="primary" sx={{ color: '#FFF' }}>Apagar</Button>
                    </ThemeProvider>
                  </ButtonWrapper>
                </>
              ) : (
                <>
                  <MovieAvaliationDescription style={{ color: '#fff', padding: '30px' }}>
                    <span>
                      {selectedMovie.overview}
                    </span>
                  </MovieAvaliationDescription>
                  <ButtonWrapper>
                    <ThemeProvider theme={theme}>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        sx={{ color: '#FFF', marginBottom: '13px' }}
                        onClick={handleRegisterMovie}
                      >
                        Adicionar
                      </Button>
                    </ThemeProvider>
                  </ButtonWrapper>
                </>
              )}
            </RightWrapper>
          </CardWrapper>
        </Dialog>
      ) : ''}
    </Wrapper>
  );
}