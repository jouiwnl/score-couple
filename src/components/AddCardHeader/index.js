import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom' 

import { ItemHeader, HeaderTitle } from './styles'

export default function() {

  const { cardid } = useParams();

  console.log(cardid);

  return (
    <>
      <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item sm={12} md={12} lg={12}>
          <ItemHeader>
            <HeaderTitle>
              {cardid ? 'Editando' : 'Adicionando'} Card
            </HeaderTitle>
          </ItemHeader>
        </Grid>
      </Grid>
    </>
  )
}