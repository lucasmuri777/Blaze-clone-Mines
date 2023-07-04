import React, {useEffect, useState} from 'react'
import { Head, Logo, Infos } from './styles'
import useAuth from '../../../hooks/useAuth';

import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [user, setUser] = useState("");
    const [coins, setCoins] = useState(0);

    const {sair} = useAuth();
    const navigate = useNavigate();


    useEffect(()=>{
        const userBD = JSON.parse(localStorage.getItem('user_token'));
        let nome = userBD.email
        
        if(nome?.length){
            setUser(nome)
        }
        const BD = JSON.parse(localStorage.getItem('users_db'));
        BD.forEach((e)=>{
           if(e.email === nome){
            setCoins(e.coins)
            return;
           }
        })
    },[coins, user])
    const handelSair = () =>{
        sair()
        navigate('/')
    }
  return (
    <Head>
        <Logo><h1 onClick={()=>{navigate('/home')}}>POOP GAMES</h1></Logo>
        <Infos>
            <p><strong>{user}</strong> você tem <strong onClick={()=>{navigate('/recarregar')}}>{coins}$</strong> para gastar</p>
           <a onClick={handelSair}>sair</a>
        </Infos>
    </Head>
  )
}

export default Header