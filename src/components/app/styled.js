import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    html, body {
        margin: 0;
    } 

    body {
        font-family: 'Poppins', sans-serif;
    }
`;

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: #141414;
`;

export const StyledInput = styled.input`
    height: 30px;
    max-width: 250px;
    width: 100%;
    border: none;
    border-bottom: 1px solid whitesmoke;
    background-color: transparent;
    color: white;
    padding: 0 10px;
    word-wrap: break-word;

    &:focus {
        outline: none;
    }
`;

export const StyledButton = styled.button`
    width: 100px;
    height: 30px;
    font-size: 12px;
    background-color: transparent;
    border: 1px solid whitesmoke;
    color: #fff;
    margin-left: 10px;
`;

export const StyledTodo = styled.div`
    position: absolute;
    width: 215px;
    min-height: 40px;
    color: #000;
    padding: 20px 35px 20px 20px;
    border-radius: 5px;
    cursor: grab;
`;

export const CloseButton = styled.button`
    position: absolute;
    right: 0;
    top: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;