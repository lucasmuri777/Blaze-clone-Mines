import React, { useRef, useEffect, useState} from 'react'
import Header from '../../components/layouts/Header'

import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'

import { Container,Minigame } from './styles'

import mines from '../../images/20742bda52d2b13a33bf1e57182c5eb4.png'

const Home = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef();
  
  useEffect(()=>{
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])

  return (
    <>
      <Header/>
      <Container>
      
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}> 
                    <motion.div 
                        className="inner"
                        drag="x"
                        dragConstraints={{
                            right: 0,
                            left: -width
                        }}
                        
                    >    
                    <Minigame>
                      <img src={mines}></img>
                      <div className='acessar'><Link to="/mines">Jogar</Link></div>
                    </Minigame>
                    <Minigame>
                      <img src={mines}></img>
                      <div className='acessar'><a>Jogar</a></div>
                    </Minigame>
                    <Minigame>
                      <img src={mines}></img>
                      <div className='acessar'><a>Jogar</a></div>
                    </Minigame>
                    <Minigame>
                      <img src={mines}></img>
                      <div className='acessar'><a>Jogar</a></div>
                    </Minigame>
                    </motion.div>   
                </motion.div>
      </Container>
    </>
  )
}

export default Home