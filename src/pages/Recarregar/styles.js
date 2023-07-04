import styled from 'styled-components'

export const Formas = styled.div`
    width: 50%;
    height: 300px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: left;
    h1{
        width: 100%;
        color: white;
        font-size: 25px;
    }

`
export const Quantidade = styled.div`
    width: 50%;
`

export const Box = styled.div`
    width: 100%;
    padding: 30px 20px;
    border:1px solid #d22989;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 50px;
    position: relative;

    h3, h4{
        width: 100%;
        color: white;
        text-align: center;
    }
    h4{
        color:red;
    }
    button{
        min-width: 100%!important;
    }

`

export const BoxPaga = styled.div`
    width: 140px;
    height: 80px;
    border-radius:10px;
    border:1px solid #d22989;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.4s all;

    &:hover{
        background-color: #d22989;
        transform: scale(1.04);
    }
    &:hover svg{
        color: #0F1923;
    } 

    svg{
        color: #d22989;
        font-size: 30px;
    }
`