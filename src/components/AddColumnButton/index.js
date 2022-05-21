import { Card, CardContent } from '@mui/material'
import React from 'react'

export default function() {

  return (
    <>
      <Card sx={{ 
          width: 315, 
          height: 40,
          marginBottom: '5px',
          background: 'transparent', 
          color: '#FFF', 
          outlineStyle: 'dashed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all ease 0.3s',

          ":hover" : {
            opacity: 0.6,
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
    </>
  )

}