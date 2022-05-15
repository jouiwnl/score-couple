import { Card, CardContent } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function() {

  return (
    <>
      <Link to="/columns" style={{ textDecoration: 'none', height: '50px' }}>
        <Card sx={{ 
            width: 315, 
            height: 50,
            marginBottom: '5px',
            background: 'transparent', 
            color: '#000', 
            opacity: 0.6,
            outlineStyle: 'dashed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all ease 0.3s',

            ":hover" : {
              background: '#000',
              opacity: 0.2,
              color: '#FFF',
              transition: 'all ease 0.3s',
              cursor: 'pointer'
            }
          }}>
          <CardContent sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            + Add column
          </CardContent>
        </Card>
      </Link>
    </>
  )

}