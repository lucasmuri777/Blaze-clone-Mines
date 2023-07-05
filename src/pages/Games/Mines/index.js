import React, { useRef, useEffect, useState} from 'react'
import Header from '../../../components/layouts/Header'

import {PainelOff,GameOff,Minas, Painel, MineSingle, ControlMinas, ValorGanho, ControlAposta} from './styles'

import {FaX, FaPlus, FaMinus, FaPlay, FaStop, FaBomb, FaRepeat} from 'react-icons/fa6'
import Container from '../../../components/layouts/Container'

var azarChance = 1.54;


const Mines = () => {
    const [aposta, setAposta] = useState(0);
    const [multiplicador, setMultiplicador] = useState(0);
    const [mines, setMines] = useState(1);
    const [play, setPlay] = useState(false);
    const [bombasPosi, setBombasPosi] = useState([]);
    const [valorGanho, setValorGanho] = useState(0);
    const [saldo, setSaldo] = useState(0);
    
    const [azar, setAzar] = useState(Math.floor(Math.random() * azarChance))
    const [perdeu, setPerdeu] = useState(false)

    useEffect(()=>{if(aposta > 90){setAposta(90)}},[aposta])

    useEffect(()=>{
        const userDB = JSON.parse(localStorage.getItem('user_token'))
        const DB = JSON.parse(localStorage.getItem('users_db'))
        
        const userName = userDB.email
        let newCoin = []
        DB.forEach((e)=>{
            
            if(saldo <= 0 && perdeu == false){
                if(e.email === userName){
                        setSaldo(parseFloat(e.coins))
                        return;
                }   
            }else{
                let dados = {email: e.email, password: e.password, coins: e.coins}
                if(e.email === userName){
                    let conta = parseFloat(saldo).toFixed(2)
                    dados.coins = conta
                }
                newCoin.push(dados)
            }
        })
        if(newCoin?.length){
            localStorage.setItem("users_db", JSON.stringify(newCoin));
        }
        setAposta(0)
        
    },[saldo])

    const handleMines = (clickPos) =>{
        if(!play){
            alert('Aposte para jogar')
            return;
        }
        const blocos = document.querySelectorAll('.wrapper-mines div')
        bombasPosi.forEach((e)=>{
            if(e == clickPos){
                blocos[clickPos].classList.add('explosion')
                blocos[clickPos].innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.1 52.4L442.6 6.5C440.7 2.6 436.5 0 432.1 0s-8.5 2.6-10.4 6.5L405.2 52.4l-46 16.8c-4.3 1.6-7.3 5.9-7.2 10.4c0 4.5 3 8.7 7.2 10.2l45.7 16.8 16.8 45.8c1.5 4.4 5.8 7.5 10.4 7.5s8.9-3.1 10.4-7.5l16.5-45.8 45.7-16.8c4.2-1.5 7.2-5.7 7.2-10.2c0-4.6-3-8.9-7.2-10.4L459.1 52.4zm-132.4 53c-12.5-12.5-32.8-12.5-45.3 0l-2.9 2.9C256.5 100.3 232.7 96 208 96C93.1 96 0 189.1 0 304S93.1 512 208 512s208-93.1 208-208c0-24.7-4.3-48.5-12.2-70.5l2.9-2.9c12.5-12.5 12.5-32.8 0-45.3l-80-80zM200 192c-57.4 0-104 46.6-104 104v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-75.1 60.9-136 136-136h8c8.8 0 16 7.2 16 16s-7.2 16-16 16h-8z"></path></svg>`
                setSaldo(parseFloat(saldo) - parseFloat(aposta))
                setPerdeu(true)
                setPlay(false)
                setAposta(0)  
                setAzar(Math.floor(Math.random() * azarChance)) 
                return;
            }
            if(blocos[clickPos].classList.contains('selected')){
                return;
            }
            blocos[clickPos].classList.add('selected')
            let teste = aposta * 2
            if(valorGanho >= teste){
                setMultiplicador((mines * 0.045) + 1)
            }
            let num = (valorGanho * multiplicador).toFixed(2)
            blocos[clickPos].innerHTML = `${num}`
            setValorGanho(num)
            
        })


    }
    const handlePlay = () =>{
        if(aposta < 1){
            alert('Aposte para jogar')
            return;
        }
        const blocos = document.querySelectorAll('.wrapper-mines div')
        blocos.forEach((e)=>{
            e.classList.remove('selected')
            e.classList.remove('explosion')
            e.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"></path></svg>`
        })
        
        setPlay(true)
        let bombas = []

        //setando o multiplicador
        setMultiplicador((mines * 0.065) + 1)
    
        //gerando as bombas aleatoriamentes
        let vec = mines + azar;
        for (let i = 0; i < vec; i++)  {
            let num = Math.ceil(Math.random() * 19)
            let teste = bombas.findIndex(element => element === num);
            if(teste != -1){
               --i
            }
            bombas.push(num)
        }
        setBombasPosi(bombas)
        setValorGanho(aposta)
        /*
            1 mina = 1.15
            2 = 1.30
            3 = 1.45
            4 = 1.60
        */
    }

    const handleStop = () =>{
        setPerdeu(false)
        setPlay(false)
        let total1 = parseFloat(saldo) - parseFloat(aposta)  
        let total2 = parseFloat(total1) + parseFloat(valorGanho)
        setSaldo(parseFloat(total2))
        setAposta(0) 
        setAzar(Math.floor(Math.random() * azarChance))
        
    }
    const handleReset = () =>{
        setPerdeu(false)
        setAposta(0)
        setAzar(Math.floor(Math.random() * azarChance))
    }

  return (
    <>
      <Header/>
      <Container quebra={"wrap"}> 
        <Minas className='wrapper-mines'>
            {!play &&
            (
            <GameOff perdeu={perdeu ? 'rgba(196, 45, 80, 0.7)' : 'rgba(15, 25, 35, 0.7)'}>
                
                {perdeu ?(
                    <>
                        <FaRepeat onClick={handleReset}/>
                        <h2>Você perdeu! Tente novamente</h2>
                    </>
                ):(
                    <FaPlay onClick={handlePlay}/>
                )}
            </GameOff>
            )
            }
            <MineSingle onClick={()=>{handleMines(0)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(1)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(2)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(3)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(4)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(5)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(6)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(7)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(8)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(9)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(10)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(11)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(12)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(13)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(14)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(15)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(16)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(17)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(18)}}><FaX/></MineSingle>
            <MineSingle onClick={()=>{handleMines(19)}}><FaX/></MineSingle>
        </Minas>
        <Painel>
        {play &&(<PainelOff><FaStop onClick={handleStop}/></PainelOff>)}
            <ControlMinas>
                <div className='control-wrapper'>
                    <a className='more' onClick={()=>{mines < 4 ? setMines(mines + 1) : setMines(4)}}><FaPlus/></a>
                    <a className='minus' onClick={()=>{mines > 1 ? setMines(mines - 1) : setMines(1)}}><FaMinus/></a>
                </div>
                <div className='minas-wrapper'><p>{mines}<span>Minas</span></p></div>
            </ControlMinas>
            <ValorGanho><div className='control-valor'>
                <p>Valor Ganho</p>
                <a><FaPlay onClick={handlePlay}/></a>
                </div><h2>{valorGanho}</h2></ValorGanho>
            <ControlAposta>
                <div className='minas-wrapper'>
                    <input 
                    type='number' 
                    value={aposta} 
                    onChange={(e)=>{e.target.value >= 0 && e.target.value <= saldo ? setAposta(e.target.value) : setAposta(0)}}/>
                </div>
                <div className='control-wrapper'>
                    <a className='more'  onClick={()=>{aposta < saldo ? setAposta(aposta + 1) : setAposta(saldo)}}><FaPlus/></a>
                    <a className='minus'  onClick={()=>{aposta > 1 ? setAposta(aposta - 1) : setAposta(0)}}><FaMinus/></a>
                </div>
            </ControlAposta>
        </Painel>
      </Container>
    </>
  )
}

export default Mines