import React, {useState} from 'react'
import Header from '../../components/layouts/Header'

import {Formas, Quantidade, Box, BoxPaga} from './styles'
import Container from '../../components/layouts/Container'

import {FaPix, FaCreditCard, FaHeart, FaMoneyBillWave} from 'react-icons/fa6'

import Buttomm from '../../components/Buttom'
import Inputt from '../../components/Input'

function Recarregar() {
  const [recarga, setRecarga] = useState("");
  const [error, setError] = useState("");
  const handleRecarregar = () =>{
    if(recarga == '' || recarga <= 0){
      setError('Digite um valor valido')
      return;
    }
    setError('')
    const userDados = JSON.parse(localStorage.getItem('user_token'))
    const DB = JSON.parse(localStorage.getItem('users_db'))
    const userName = userDados.email
    if(userName?.length){
      let newDados = []
      DB.forEach((e)=>{
        let dados = {email: e.email, password: e.password, coins: e.coins}
        if(e.email === userName){
          let conta = parseFloat(dados.coins) + parseFloat(recarga)
          dados.coins = conta
        }
        newDados.push(dados)
      })
      localStorage.setItem("users_db", JSON.stringify(newDados));
      setRecarga('')
    }
  }

  return (
    <>
      <Header/>
      <Container>
        <Formas>
          <h1>Deposite toda sua grana aqui e fique Rico!</h1>
          <BoxPaga><FaPix/></BoxPaga>
          <BoxPaga><FaCreditCard/></BoxPaga>
          <BoxPaga><FaHeart/></BoxPaga>
        </Formas>
        <Quantidade>
          <Box>
            <h3>Insira o valor de depósito</h3>
            <Inputt 
              type='number' 
              placeholder="Valor para adicionar" 
              value={recarga}
              onChange={(e)=>{e.target.value > 0 ? setRecarga(e.target.value) : setRecarga(0)}}
            />
            <Buttomm
              Text="Comprar"
              onClick={handleRecarregar}
            />
            {error != '' &&(<h4>{error}</h4>)}
          </Box>
          
        </Quantidade>
      </Container>
      
    </>
  )
}

export default Recarregar