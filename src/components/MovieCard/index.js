import React from 'react';
import { CardWrapper } from './styles'
import _ from 'lodash';

export default function({ movie }) {

  const API_IMAGE = `https://image.tmdb.org/t/p/w400`;
  const imgUrl = API_IMAGE.concat(movie.poster_path);

  return (
    <>
      <CardWrapper poster={imgUrl}/>
    </>
  )
}