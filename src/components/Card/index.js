import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Status, HeaderCard, StatusWrapper } from './styles'

export default function() {
  return (
    <Card sx={{ width: '322px', marginBottom: '13px', background: '#464646', color: '#E7E7E7' }}>
      <CardActionArea>
        <CardContent>
          <HeaderCard>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <StatusWrapper>
              <Status status="doing"/>
            </StatusWrapper>
          </HeaderCard>
          <Typography variant="body2" color="#E7E7E7">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}