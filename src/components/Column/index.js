import React from 'react'

import { ColumnWrapper, ColumnTitle } from './styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Card from '../Card';
import AddCard from '../AddCard';

export default function() {
  return (
    <>
      <ColumnWrapper>
        <ColumnTitle>
          <p>Title</p>
          <MoreHorizIcon />
        </ColumnTitle>
        <Card />
        <AddCard />
      </ColumnWrapper>
    </>
  )
}