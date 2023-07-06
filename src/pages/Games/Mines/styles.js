import styled from 'styled-components'

export const Minas = styled.div`
    width: 100% ;
    height: 60%;
    border-radius: 10px;
    border: 1px solid #1d2d3d;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap:15px;
    padding: 17px 0;
    position: relative;

    .selected{
        background-color: #1aab3e!important;
        font-weight: bold;
        font-size: 30px;
        color: white;
    }
    .explosion{
        background-color: #c42d50!important;
    }
    .explosion svg{
        color: white;
        font-size: 30px;
    }
`

export const MineSingle = styled.div`
        width: calc((100% / 4) - 20px);
        height: 120px;
        background-color: #1d2d3d;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.2s all;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            transform: scale(1.05);
        }
        &:active{
            transform: scale(0.95);
        }
        svg{
            color: #0F1923;
            font-size: 40px;
        }
`

export const Painel = styled.div`
    width: 100%;
    height: 200px;
    background-color: #1d2d3d;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    svg{
        color: #d22989;
    }
`

export const ControlMinas = styled.div`
    width:calc(100% / 3);
    height: 100%;
    display: flex;
    align-items: center;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .control-wrapper, .minas-wrapper{
        flex-direction: column;
        padding: 10px;
        gap: 10px;
    }
    .control-wrapper a{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        cursor: pointer;
        background-color: #0F1923;
        border-radius: 10px;
    }
    .control-wrapper a svg{
      
        font-size: 40px;
    }
    
    .minas-wrapper p{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: #0F1923;
        border-radius: 10px;
        color: #d22989;
        font-size: 40px;
        font-weight: bold;
        position:relative;
    }
    .minas-wrapper p span{
        position: absolute;
        font-size: 25px;
        bottom: 10px;
    }
`

export const ValorGanho = styled.div`
    width:calc(100% / 3);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:10px;
    padding:10px;

    h2{
        height: 80%;
        width: 100%;
        background-color: #0F1923;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #d22989;
        font-size: 55px;
    }
    .control-valor{
        width: 100%;
        height: 20;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:50px;
    }
    p, a{
        color: white;
        font-size: 20px;
    }
    .control-valor a svg{
        font-size: 30px;
        cursor: pointer;
    }
`

export const ControlAposta = styled.div`
 width:calc(100% / 3);
    height: 100%;
    display: flex;
    align-items: center;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .control-wrapper, .minas-wrapper{
        flex-direction: column;
        padding: 10px;
        gap: 10px;
    }
    .control-wrapper a{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        cursor: pointer;
        background-color: #0F1923;
        border-radius: 10px;
    }
    .control-wrapper a svg{
      
        font-size: 40px;
    }
    
    .minas-wrapper input{
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-color: #0F1923;
        border-radius: 10px;
        color: #d22989;
        font-size: 40px;
        font-weight: bold;
        outline: none;
        border: none;
        text-align: center;
    }
`

export const GameOff = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.perdeu};
    z-index: 99;
    border-radius: 10px;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 50px;
    svg{
        font-size: 70px;
        color: white;
        cursor: pointer;
    }
    h2{
        color: white;
        width: 100%;
        text-align: center;
    }
`

export const PainelOff = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(15, 25, 35, 0.95);
    z-index: 99;
    border-radius: 10px;
    svg{
        font-size: 70px;
        color: #d22989;
        cursor: pointer;
    }
`