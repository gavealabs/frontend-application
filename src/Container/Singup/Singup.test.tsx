import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Switch } from "react-router-dom";
import Singup from './';

describe("Login Component", () => {
    test("Deve conter um botão Cadastrar", () => {
        render(<BrowserRouter><Switch><Singup /></Switch></BrowserRouter>);
    
        const buttonCad = screen.getByRole('button', {name: /Cadastrar/ });
        
        expect(buttonCad).toBeInTheDocument();
    });

    test("Quando não tiver nenhum valor nos inputs, deve ter uma mensagem de erro", () => {
        render(<BrowserRouter><Switch><Singup /></Switch></BrowserRouter>);
    
        const buttonCad = screen.getByRole('button', {name: /Cadastrar/ });
        buttonCad.click();
        const message = screen.getByText("Preencha todos os campos!");
        expect(message).toBeInTheDocument();
    });

    test("Se tiver as senhas colocadas forem diferentes deve ter uma mensagem indicando isso", () => {
        render(<BrowserRouter><Switch><Singup /></Switch></BrowserRouter>);
    
        const input = screen.getByPlaceholderText('Senha');
        fireEvent.change(input, {
            target: { value: "123" }
        });

        const inputConfirm = screen.getByPlaceholderText('Confirmar senha');
        fireEvent.change(inputConfirm, {
            target: { value: "12" }
        });

        const message = screen.getByText("As senhas não correspondem");
        expect(message).toBeInTheDocument();
    });
});