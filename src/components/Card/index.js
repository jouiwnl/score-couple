import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { HeaderCard, HeaderTitle, LineStatus } from './styles'

export default function({ status, conteudo }) {

  const navigate = useNavigate();

  const openEdit = () => {
    navigate('/cards/1')
  } 

  return (
    <>
      <Card onClick={openEdit} sx={{ minWidth: '100px', marginBottom: '13px', background: '#121212', color: '#FFF', borderRadius: '10px' }}>
        <LineStatus status={status}/>
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
              color: '#FFF',
              mixBlendMode: 'normal',
              opacity: 0.4,
            }}>
              {conteudo}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}