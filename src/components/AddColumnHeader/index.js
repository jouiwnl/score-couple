import { Grid } from '@mui/material'
import React from 'react'

import { ItemHeader, HeaderTitle } from './styles'
import { useParams } from 'react-router-dom'

export default function() {

  const { columnid } = useParams();

  return (
    <>
      <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item sm={12} >
          <ItemHeader>
            <HeaderTitle>
              {columnid ? 'Editando' : 'Adicionando'} Coluna
            </HeaderTitle>
          </ItemHeader>
        </Grid>
      </Grid>
    </>
  )
}