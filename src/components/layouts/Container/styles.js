import styled from 'styled-components'

export const Containerr = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0px auto;
    padding: 20px 2%;
    display: ${props => props.display};
    flex-wrap: ${props => props.quebra};
    gap: 10px;
`