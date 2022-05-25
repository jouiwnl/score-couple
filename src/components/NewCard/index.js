import React from 'react'
import Card from '@mui/material/Card';

import { 
  LeftSide, 
  RightSide, 
  CardWrapper, 
  LineStatus, 
  Wrapper, 
  RightSideHeader, 
  RightMovieInformation,
  MovieAvaliation,
  AditionalInformation,
  Information
} from './styles'
import { Rating } from '@mui/material';

export default function({ status, movie }) {

  return (
    <>
      <Wrapper>
        <Card sx={{ minWidth: '100px', maxHeight: '150px', marginBottom: '13px', background: '#121212', color: '#FFF', borderRadius: '10px' }}>
          <CardWrapper>
            <LeftSide image={`https://image.tmdb.org/t/p/w400${movie.posterUrl}`}/>
            <RightSide>
              <LineStatus status={status}/>
              <RightSideHeader> {movie.name} </RightSideHeader>
              <AditionalInformation>
                <Information>
                  {movie.releaseDate}
                </Information>
                <Information>
                  {movie.runtime} min
                </Information>
                <Information>
                  {movie.genre}
                </Information>
              </AditionalInformation>
              {movie.score && !(movie.status == 'DOING' || movie.status == 'NOTSTARTED') ? (
                <RightMovieInformation>
                  <MovieAvaliation>
                    <Rating
                      name="simple-controlled"
                      value={movie.score}
                      readOnly
                    />
                  </MovieAvaliation>
                </RightMovieInformation>
              ) : '' }
            </RightSide>
          </CardWrapper>
        </Card>
      </Wrapper>
    </>
  );
}