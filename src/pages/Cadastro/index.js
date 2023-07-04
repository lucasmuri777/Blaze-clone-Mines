import React, {useState} from 'react';

import Inputt from '../../components/Input'
import Buttomm from '../../components/Buttom'

import {Container, Label, Content, LabelError, LabelSignup, Strong} from './styles';

import {Link, useNavigate} from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {cadastrar} = useAuth();

  const handleCadastro = () =>{
    if(!email || !emailConf || !senha){
      setError("Preencha todos os campos")
      return;
    }else if(email !== emailConf){
      setError("Os E-mails não são iguais");
      return;
    }
    
    const res = cadastrar(email,senha);
    if(res){
      setError(res)
      return;
    }
    alert("Usuário cadastrado com sucesso!")
    navigate("/");
  }

  return (
    <Container>
      <Label>Faça seu Cadastro</Label>
      <Content>
      <Inputt
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={(e)=>[setEmail(e.target.value), setError("")]}
      />
      <Inputt
        type="email"
        placeholder="Confirme seu E-mail"
        value={emailConf}
        onChange={(e)=>[setEmailConf(e.target.value), setError("")]}
      />
       <Inputt
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e)=>[setSenha(e.target.value), setError("")]}
      />
      <LabelError>{error}</LabelError>
      <Buttomm Text="Entrar" onClick={handleCadastro}/>
      
      <LabelSignup>
       Já tem uma conta?
        <Strong>
          <Link to="/login">&nbsp;Entre</Link>
        </Strong>
      </LabelSignup>
    </Content>

    </Container>
  )
}

export default Cadastro