import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Home from './pages/Home';
import Header from './components/Header';
import { Main } from './pages/Home/styles';
import Search from './pages/Search';
import Login from './pages/Login';
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup';

function App() {

  const [isLogged, setIsLogged] = React.useState(undefined);

  setInterval(() => {
    setIsLogged(auth.currentUser)
  }, 100);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
          {isLogged ? (
            <Header />
          ) : ''}
          
          <Main>
            <Routes>
              <Route path='/' element={ isLogged ? <Home /> : <Login />}></Route>
              <Route path='/login' element={ !isLogged ? <Login /> : <Home /> }></Route>
              <Route path='/signup' element={ !isLogged ? <Signup /> : <Home /> }></Route>
              <Route path='/search' element={ isLogged ? <Search /> : <Login />}></Route>
              <Route path='/search/:columnid' element={ isLogged ? <Search /> : <Login />}></Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Main>
        </BrowserRouter>
        <ToastContainer position='top-right' autoClose={1200} />
    </>
  );
}

export default App;
