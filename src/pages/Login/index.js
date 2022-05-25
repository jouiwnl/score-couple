import { AccountCircle } from '@mui/icons-material'
import { Button, Card, CardActions, Grid, InputAdornment, TextField } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import React from 'react'
import logo from '../../assets/logo.svg'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';

import { Wrapper, Logo } from './styles'
import { toast } from 'react-toastify'

export default function() {
  
  const navigate = useNavigate();
  const [loginValues, setLoginValues] = React.useState(null);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setLoginValues({...loginValues, [name]: value});
  }

  const handleLogin = () => {
    toast.promise(
      signInWithEmailAndPassword(auth, loginValues.email, loginValues.password)
      .then(() => {
        navigate('/')
      }),
      {
        pending: 'Logando...',
        success: 'Logado com sucesso!',
        error: 'Usuário ou senha incorretos!'
      }
    )
  }
  
  return (
    <Wrapper>
      <Card sx={{ 
        minWidth: 275, 
        padding: '40px', 
        display: 'flex', 
        flexDirection: 'column', 
        background: '#000' 
      }}>
        <Logo>
          <img src={logo} alt="logo"></img>
        </Logo>
        <TextField
          onChange={handleInputChange}
          name="email"
          autoComplete='off'
          id="input-with-icon-textfield"
          label="Email"
          focused
          sx={{ 
            marginBottom: '25px', 
            label: { color: '#fff !important' }, 
            div: {
              input: { 
                color: '#fff',
              },
              "::after" : { borderBottom: '2px solid #fff' }
            }, 
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: '#fff', marginBottom: '6px' }} />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          onChange={handleInputChange}
          name="password"
          id="input-with-icon-textfield"
          label="Password"
          type="password"
          focused
          sx={{ 
            marginBottom: '25px', 
            label: { color: '#fff !important' }, 
            div: {
              input: { 
                color: '#fff',
              },
              "::after" : { borderBottom: '2px solid #fff' }
            }, 
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: '#fff', marginBottom: '6px' }}/>
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <CardActions sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '12px' }}>
          <a onClick={() => navigate('/signup')} style={{ textDecoration: 'none', color: '#fff', marginBottom: '15px', cursor: 'pointer' }}>
            Cadastre-se
          </a>
          <Button onClick={handleLogin} sx={{ width: '100px', color: '#000', background: '#faaf00', fontWeight: '700' }} variant="contained" size="small">Login</Button>
        </CardActions>
      </Card>
    </Wrapper>
  )
}