import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GreenCube from './pages/green-cube/GreenCube';
import Layout from './pages/layout/Layout';

class App extends React.Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> }></Route>
            <Route exact path="cube" element={ <GreenCube /> }></Route>
            <Route path="*" element={ <NaoEncontrada /> }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

function NaoEncontrada(){
  return <h2>Mals Aê, achei nada não</h2>;
}

function Home(){
  return <h1>Você tá na home, parsa!</h1>;
}

export default App;
