import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Logo2 from './../../imagens/LogoFecap2.png';

const Login = ({ onLogin }) => {
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(); // Chama a função onLogin passada por props
        history.push('/'); // Redireciona para a página inicial após o login
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <LogoContainer>
                    <img src={Logo2} alt="Logo " />
                </LogoContainer>
                <InputBox>
                    <Input type="text" placeholder='E-mail*' required />
                </InputBox>
                <InputBox>
                    <Input type="password" placeholder='Senha*' required />
                </InputBox>

                <RememberForgot>
                    <label><input type="checkbox" />Lembrar-me</label>
                </RememberForgot>

                <Button type="submit">Acessar</Button>

                <RegisterLink>
                    <p>Não possui uma conta? <Link to="/cadastro">Criar conta</Link></p>
                </RegisterLink>
            </form>
        </Wrapper>
    );
};

// Estilos omitidos para brevidade



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

const RememberForgot = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
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

const RegisterLink = styled.div`
    font-size: 14.5px;
    text-align: center;
    margin-top: 20px;
`;

export default Login;
