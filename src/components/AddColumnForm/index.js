import { Grid, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

import { Form } from './styles'

export default function() {
  return (
    <>
      <Form>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid item sm={3}>
            <TextField size='small' label="Nome da coluna" variant="standard" fullWidth /> 
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: '30px', justifyContent: 'center'}}>
          <Grid item sm={4} sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" sx={{ marginRight: '30px' }}>Cancelar</Button>
            </Link>
            <Button variant="contained" >Salvar</Button>
          </Grid>
        </Grid>
      </Form>
    </>
  )

}