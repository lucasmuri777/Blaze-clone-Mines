import styled from 'styled-components'

export const RoletaCont = styled.div`
    min-width: 100%;
    min-height: 500px;
    background-color: #1d2d3d;
    border-radius: 10px;
`
export const ControlAposta = styled.div`
    height: 100%;
    width: 30%;
    border-right: 1px solid #0F1923;
    display: flex;
`
export const Form = styled.div`
   height: 500px;
   width: 100%;
   padding: 30px 30px;
   display: flex;
   justify-content: top;
   flex-direction: column;
   gap: 25px;

   
`

export const ApostaWrapper = styled.div`
   display: flex;
    justify-content: left;
    flex-direction:row;
    background-color: #0F1923;
    border-radius: 10px;
    align-items: center;
    padding: 10px;

    input{
        background-color: transparent;
        color:white;
        border: none;
        width: 75%;
        height: 100%;
        font-size: 18px;
        padding-top: 1px;
        padding-left: 5px;
        display: flex;
        align-items: center;
    }
    input::placeholder{
        font-size: 16px;
        color: white;
    }
    div.svg-wrapper{
        width: 25%;
        border: 3px solid #1d2d3d;
        border-radius: 10px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export const CorWrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    span{color:white; font-size:17px;}

    div.wrapper-colors{
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-direction: row;
        width: 100%;
        
        div{
            width: calc(100% /3);
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            font-size: 18px;
            transition: 0.2s all;
        }
        div.selected{
            border:8px double white; 
            transform:scale(0.95);
            transition: 0.2s all linear;
        }
        .white.selected{border-color:#d22989;}
        .pink{background-color:#d22989;}
        .white{background-color:#fafafa;color:#d22989;}
        .black{background-color:#111111;}
    }
    
`
export const BtnApostar = styled.div`
    width: 100%;
    
    button{
        width: 100%;
        background-color: #d22989;
        border: none;
        border-radius: 10px;
        padding: 20px 0;
        color: white;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
    }
`




export const DoubleGame = styled.div`
    height: 100%;
    width: 70%;
`
export const RoletaGame = styled.div`
    
`
export const Results = styled.div`
    
`

export const RoletaInfos = styled.div`

`
