import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import Inputt from '../../components/Input';
import Buttomm from '../../components/Buttom';
import {Container, Label, Content, LabelError, LabelSignup, Strong} from './styles';

const Login = () => {
  const {logar} = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () =>{
    if(!email || !senha ){
      setError("Preencha todos os campos");
      return;
    }

    const res = logar(email, senha);

    if(res){
      setError(res)
      return;
    }

    navigate("/home")
  }

  return (
    <Container>
    <Label>Login</Label>

    <Content>
      <Inputt
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e)=>[setEmail(e.target.value), setError("")]}
      />
      <Inputt
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e)=>[setSenha(e.target.value), setError("")]}
      />
      <LabelError>{error}</LabelError>
      <Buttomm Text="Entrar" onClick={handleLogin}/>
      
      <LabelSignup>
        Não tem uma conta?
        <Strong>
          <Link to="/cadastro">&nbsp;Registre-se</Link>
        </Strong>
      </LabelSignup>
    </Content>

   </Container>
  )
}

export default Login