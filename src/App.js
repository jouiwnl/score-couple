import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Home from './pages/Home';
import Header from './components/Header';
import { Main } from './pages/Home/styles';
import Search from './pages/Search';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
          <Header />
          <Main>
            <Routes>
              <Route path='/' element={ <Home /> }></Route>
              <Route path='/search' element={ <Search /> }></Route>
              <Route path='/search/:columnid' element={ <Search /> }></Route>
            </Routes>
          </Main>
        </BrowserRouter>
    </>
  );
}

export default App;
