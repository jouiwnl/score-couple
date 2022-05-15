import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { HeaderCard, HeaderTitle, LineStatus } from './styles'

export default function({ status }) {

  const navigate = useNavigate();

  const openEdit = () => {
    navigate('/cards/1')
  } 

  return (
    <>
      <LineStatus status={status}/>
      <Card onClick={openEdit} sx={{ width: '322px', marginBottom: '13px', background: '#F4F4F4', color: '#000000' }}>
        <CardActionArea>
          <CardContent>
            <HeaderCard>
              <HeaderTitle>
                Lizard
              </HeaderTitle>
            </HeaderCard>
            <Typography variant="body2" sx={{ 
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: '13px',
              lineHeight: '19px',
              color: '#000000',
              mixBlendMode: 'normal',
              opacity: 0.4,
            }}>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}