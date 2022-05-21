import { Card, CardContent } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function({ columnid }) {

  return (
    <>
      <Link to={`/search/${columnid}`} style={{ textDecoration: 'none' }}>
        <Card sx={{ 
            width: 315, 
            height: 50,
            marginBottom: '5px',
            background: 'transparent', 
            color: '#FFF', 
            outlineStyle: 'dashed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all ease 0.3s',

            ":hover" : {
              opacity: 0.5,
              transition: 'all ease 0.3s',
              cursor: 'pointer'
            }
          }}>
          <CardContent sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            + Add card
          </CardContent>
        </Card>
      </Link>
    </>
  )

}