import React from "react";
import { User } from "../../Context/Initial";
import { useHistory } from "react-router-dom";
import { setLogin } from "../../services/auth";
import { Input, Button } from "../../Components";
import UserProvider, { UserContext } from "../../Context/UserProvider";
import { Title, SmallText, Screen, LinkText, DivContent, Message, MessageContent } from "./style";
import { AiOutlineUser, AiOutlineMail, AiFillLock, AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";

export default function Singup(){
    let history = useHistory();
    const [name, setName] = React.useState<string>();
    const [email, setEmail] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const [passwordConfirm, setPasswordConfirm] = React.useState<string>();
    const [type, setType] = React.useState<string>("password");
    const [typeConfirm, setTypeConfirm] = React.useState<string>("password");
    const [message, setMessage] = React.useState<string>();
    const [typeMessage, setTypeMessage] = React.useState<string>();
    const { user, changeUser } = React.useContext(UserContext);

    const changeTypePassword = () => {
        if(type === "password")
            setType("text");
        else
            setType("password");
    }

    const validateEmail = (email: string) => {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    const changeTypePasswordConfirm = () => {
        if(typeConfirm === "password")
            setTypeConfirm("text");
        else
            setTypeConfirm("password");
    }

    const validation = () => {
        if(name === "" || name === undefined){
            return false;
        }
        else if(email === "" || email === undefined){
            return false;
        }
        else if(password === "" || password === undefined){
            return false;
        }
        else if(passwordConfirm === "" || passwordConfirm === undefined){
            return false;
        }
        else if(password !== passwordConfirm){
            return false;
        }
        else if(!validateEmail(email)){
            return false;
        }
        else{
            return true;
        }
    }

    const handleRegister = async () => {
        if(!validation()){
            setMessage("Preencha todos os campos!");
            setTypeMessage("error");
        }
        else{
            let usuario: User = {
                name: name ? name : "",
                email: email ? email : "",
                password: password ? password : ""
            };

            setLogin(btoa(email ? email : ""));
            changeUser(usuario)
            setMessage("Dados cadastrados com sucesso!");
            setTypeMessage("success");
            history.push("/login");
        }
    }

    return(
    <Screen>
        <DivContent>
            <div style={{width: "100%"}}>
                <Title>Criar Conta</Title>
                {message &&
                    <Message typeMessage={typeMessage}>
                        {message}
                    </Message>
                }
                <Input
                    label="Nome Completo"
                    type="text"
                    placeholder="Nome Completo"
                    name="name"
                    value={name}
                    onChange={(e: { target: { value: React.SetStateAction<string | undefined>; }; }) => setName(e.target.value)}
                    iconStart={<AiOutlineUser style={{color: "#748C94", fontSize: "16px"}}/>}/>
                <Input
                    label="Email"
                    placeholder="Email"
                    type="email"
                    name="Email"
                    value={email}
                    errorMessage={email ? (validateEmail(email ? email : "") ? undefined : "Insira um email valido") : undefined}
                    onChange={(e: { target: { value: React.SetStateAction<string | undefined>; }; }) => setEmail(e.target.value)}
                    iconStart={<AiOutlineMail style={{color: "#748C94", fontSize: "16px"}}/>}/>
                <Input
                    label="Senha"
                    placeholder="Senha"
                    name="password"
                    type={type}
                    value={password}
                    onChange={(e: { target: { value: React.SetStateAction<string | undefined>; }; }) => setPassword(e.target.value)}
                    iconStart={<AiFillLock style={{color: "#748C94", fontSize: "16px"}}/>}
                    iconBottom={type === "password" ?
                        <AiTwotoneEye onClick={() => changeTypePassword()} style={{color: "#748C94", fontSize: "16px"}}/>
                        :
                        <AiTwotoneEyeInvisible onClick={() => changeTypePassword()} style={{color: "#748C94", fontSize: "16px"}}/>
                    }
                />
                <Input
                    label="Confirmar senha"
                    placeholder="Confirmar senha"
                    name="passwordConfirm"
                    type={typeConfirm}
                    value={passwordConfirm}
                    onChange={(e: { target: { value: React.SetStateAction<string | undefined>; }; }) => setPasswordConfirm(e.target.value)}
                    iconStart={<AiFillLock style={{color: "#748C94", fontSize: "16px"}}/>}
                    iconBottom={typeConfirm === "password" ?
                        <AiTwotoneEye onClick={() => changeTypePasswordConfirm()} style={{color: "#748C94", fontSize: "16px"}}/>
                        :
                        <AiTwotoneEyeInvisible onClick={() => changeTypePasswordConfirm()} style={{color: "#748C94", fontSize: "16px"}}/>
                    }
                    errorMessage={password !== passwordConfirm ? "As senhas não correspondem" : undefined}
                />
                <div style={{width: "100%"}}>
                    <Button variant="contained" marginTop="30px" onClick={() => handleRegister()}>
                        Cadastrar
                    </Button>
                </div>
            </div>
        </DivContent>
        <MessageContent>
            <LinkText to="/login">
                <SmallText>
                    Já tem uma conta?
                </SmallText>
                <SmallText color="#FF6900" weight={700} marginLeft="5px">
                    Faça o login
                </SmallText>
            </LinkText>
        </MessageContent>
    </Screen>
    )
}