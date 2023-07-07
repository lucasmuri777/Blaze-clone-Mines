import {React, Fragment} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Recarregar from './pages/Recarregar'

import useAuth from './hooks/useAuth';
import Mines from './pages/Games/Mines';
import Roleta from './pages/Games/Roleta';

const Private = ({Item}) =>{
   const { logar } = useAuth();

   return logar ? <Item/> : <Login/>
}

const Rotas = () => {
  return (
     <BrowserRouter>
     <Fragment>
      <Routes>
         <Route exact path="/home" element={<Private Item={Home}/>} />
         <Route exact path="/recarregar" element={<Private Item={Recarregar}/>} />
         <Route exact path="/login" element={<Login/>} />
         <Route path="/cadastro" element={<Cadastro/>} />
         <Route path="/mines" element={<Private Item={Mines}/>}/>
         <Route path="/roleta" element={<Private Item={Roleta}/>}/>
         <Route path="*" element={<Login/>}/>
      </Routes>
     </Fragment>
 </BrowserRouter>
  );
};

export default Rotas;
