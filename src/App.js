import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Home from './pages/Home';
import Header from './components/Header';
import { Main } from './pages/Home/styles';
import AddCard from './pages/AddCard';
import AddColumn from './pages/AddColumn';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
          <Header />
          <Main>
            <Routes>
              <Route path='/' element={ <Home /> }></Route>
              <Route path='/cards' element={ <AddCard /> }></Route>
              <Route path='/cards/:cardid' element={ <AddCard /> }></Route>
              <Route path='/columns' element={ <AddColumn /> }></Route>
              <Route path='/columns/:columnid' element={ <AddColumn /> }></Route>
            </Routes>
          </Main>
        </BrowserRouter>
    </>
  );
}

export default App;
