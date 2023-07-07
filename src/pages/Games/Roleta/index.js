import Header from '../../../components/layouts/Header'
import Container from '../../../components/layouts/Container'

import {RoletaCont, 
    RoletaInfos, 
    ControlAposta, 
    DoubleGame, 
    Form, 
    ApostaWrapper,
    CorWrapper, 
    BtnApostar,
    RoletaGame,
    Results,

} from './styles'
import Inputt from '../../../components/Input'

import {MdOutlineAttachMoney} from 'react-icons/md'


export default function Roleta(){
    
    const handleChangeChoice = (choice) =>{
        const colors = document.querySelectorAll('.wrapper-colors .color-single')
        colors.forEach((e)=>{
            e.classList.remove('selected')
        })
        colors[choice].classList.add('selected')
    }

    return(
        <>
        <Header/>
        <Container quebra="wrap">
            <RoletaCont>
                <ControlAposta>
                    <Form>
                        <ApostaWrapper>
                            <input type='number' placeholder='Valor da aposta'/>
                            <div className='svg-wrapper'><MdOutlineAttachMoney color='#1d2d3d' size={35}/></div>
                        </ApostaWrapper>
                        <CorWrapper>
                            <span>Selecione a cor</span>
                            <div className='wrapper-colors'> 
                                <div className='pink color-single selected' onClick={()=>{handleChangeChoice(0)}}>2x</div>
                                <div className='white color-single' onClick={()=>{handleChangeChoice(1)}}>14x</div>
                                <div className='black color-single' onClick={()=>{handleChangeChoice(2)}}>2x</div>
                            </div>
                        </CorWrapper>
                        <BtnApostar>
                            <button>Apostar</button>
                        </BtnApostar>
                    </Form>
                </ControlAposta>
                <DoubleGame>
                    <RoletaGame>

                    </RoletaGame>
                    <Results>

                    </Results>  
                </DoubleGame>
            </RoletaCont>

            <RoletaInfos>
               
            </RoletaInfos>
        </Container>
        </>
    )
}