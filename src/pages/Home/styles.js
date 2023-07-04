import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0px auto;
    padding: 20px 2%;

    .carousel{
        width: 100%;
        display: flex;
        gap:10px;
        flex-wrap: nowrap;
        overflow: hidden;
        height: 400px;
        cursor: grab !important;;
    }
    .carousel:active{
        cursor: grabbing!important;;
    }
    .inner{
        width: 100%;
        display: flex;
        gap:10px;
    }
`

export const Minigame = styled.div`
    border: 1px solid #1d2d3d;
    min-width: calc(35% - 11px);
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .acessar{
        position: absolute;
        z-index: 99;
        background-color: rgba(15, 25, 35, 0.5);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: none;
        justify-content: center;
        align-items: center;
    }
    .acessar a{
        background-color: #d22989;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    &:hover .acessar{
        display: flex;
    }
`