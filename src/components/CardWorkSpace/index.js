import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <>
      <Card sx={{ minWidth: 322, marginRight: 5, background: '#464646', color: '#E7E7E7' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="#E7E7E7">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to={`/workspaces/${1}`}>
            <IconButton sx={{ color: '#FFF' }}>
                <ArrowRightAltIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card> 
    </>
  )
}