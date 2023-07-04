import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`;

export const Content = styled.div`
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    padding: 20px;
    border-radius: 5px;
    border:1px solid #d22989;
`;

export const Label = styled.label`
    font-size:28px;
    font-weight: 600;
    text-transform: uppercase;
    color: #d22989;
`;

export const LabelSignup = styled.label`
    font-size: 16px;
    color:white;
`

export const LabelError = styled.label`
    font-size:14px;
    color: red;
`;
export const Strong = styled.strong`
    cursor: pointer;

    a{
        text-decoration: none;
        color:white;
    }
`;
