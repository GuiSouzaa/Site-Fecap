import React, { useState } from 'react';
import styled from 'styled-components';
import Logo2 from './../../imagens/LogoFecap2.png';
import { Redirect } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #00693C;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 28px;
`;

const InputBox = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    background-color: #00693C;
    margin: 30px 0;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: #fff;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 10px;
    font-size: 16px;
    color: black;
    padding: 20px 45px 20px 20px;
`;

const Button = styled.button`
    height: 45px;
    width: 100%;
    background-color: black;
    border: none;
    outline: none;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
`;

const SuccessMessage = styled.div`
    color: green;
    font-size: 18px;
    margin-top: 10px;
`;

const Cadastro = () => {
    const [isCadastroSuccess, setIsCadastroSuccess] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (event) => {
        setIsCadastroSuccess(true);
        setShowSuccessMessage(true);
        event.preventDefault();
    };

    if (isCadastroSuccess) {
        return <Redirect to="/login" />;
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <LogoContainer>
                    <img src={Logo2} alt="Logo " />
                </LogoContainer>
                <InputBox>
                    <Input type="text" placeholder='Nome' required />
                </InputBox>
                <InputBox>
                    <Input type="email" placeholder='E-mail*' required />
                </InputBox>
                <InputBox>
                    <Input type="password" placeholder='Senha*' required />
                </InputBox>
                <Button type="submit">Cadastrar</Button>
                {showSuccessMessage && <SuccessMessage>Cadastro realizado com sucesso!</SuccessMessage>}
            </form>
        </Wrapper>
    );
};

export default Cadastro;
