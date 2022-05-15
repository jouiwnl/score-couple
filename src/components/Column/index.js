import React from 'react'

import { ColumnWrapper, ColumnTitle, Title } from './styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Card from '../Card';
import AddCardButton from '../AddCardButton';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom'

export default function() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openEdit = () => {
    navigate('/columns/1')
  }

  return (
    <>
      <ColumnWrapper>
        <ColumnTitle>
          <Title>
            Title
          </Title>
          <Button sx={{ color: '#000' }} onClick={handleClick}>
            <MoreHorizIcon />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={openEdit}>Edit column</MenuItem>
          </Menu>
        </ColumnTitle>
        <Card status="doing"/>
        <Card status="canceled"/>
        <Card status="completed"/>
        <AddCardButton />
      </ColumnWrapper>
    </>
  )
}