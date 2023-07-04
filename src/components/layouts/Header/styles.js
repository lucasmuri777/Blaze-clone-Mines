import styled from 'styled-components'

export const Head = styled.header`
    width: 100%;
    padding:10px 2%;
    background-color: #0F1923;
    min-height: 90px;
    align-items: center;
    display: flex;
    border-bottom: 1px solid #1d2d3d;
`

export const Logo = styled.div`
    width: 50%;
    height: 100%;

    h1{
        font-size: 20px;
        color: #d22989;
        cursor: pointer;
    }

`

export const Infos = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    p{
        color: white;
        display: flex;
        align-items: center;
    }
    strong{
        cursor:pointer;
    }
    a{
        padding: 10px 20px;
        color:#1d2d3d;
        background-color: #d22989;
        border-radius: 5px;
        font-weight: 600;
        margin-left: 20px;
        cursor: pointer;
    }

    svg{
        margin: 0 10px;
        margin-top: 3px;
        font-size: 24px;
        cursor: pointer;
    }
`