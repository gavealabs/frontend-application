import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Switch } from "react-router-dom";
import Login from './';

describe("Login Component", () => {
    test("Deve conter um botão entrar", () => {
        render(<BrowserRouter><Switch><Login /></Switch></BrowserRouter>);
    
        const buttonLogin = screen.getByRole('button', {name: /Entrar/ });
        
        expect(buttonLogin).toBeInTheDocument();
    });
    test("Quando não tiver nenhum valor nos inputs, deve ter uma mensagem de erro", () => {
        render(<BrowserRouter><Switch><Login /></Switch></BrowserRouter>);
    
        const buttonLogin = screen.getByRole('button', {name: /Entrar/ });
        buttonLogin.click();
        const message = screen.getByText("Preencha todos os campos!");
        expect(message).toBeInTheDocument();
    });
});