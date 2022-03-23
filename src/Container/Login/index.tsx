import React from "react";
import api from "../../services/api";
import { User } from "../../Context/Initial";
import { Input, Button } from "../../Components/";
import UserProvider, { UserContext } from "../../Context/UserProvider";
import { Title, SmallText, Screen, LinkText, Message, DivContent } from "./style";
import { AiOutlineMail, AiFillLock, AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";

export default function Login(){
    const [email, setEmail] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const [type, setType] = React.useState<string>("password");
    const [errorMessage, setErrorMessage] = React.useState<string>();

    const { user, changeUser } = React.useContext(UserContext);

    const changeTypePassword = () => {
        if(type === "password")
            setType("text");
        else
            setType("password");
    }

    const validation = () => {
        if(email === "" || email === undefined){
            return false;
        }
        else if(password === "" || password === undefined){
            return false;
        }
        else{
            return true;
        }
    }

    const handleLogin = async () => {
        if(!validation()){
            setErrorMessage("Preencha todos os campos!");
        }
        else{
            try{
                let userSelected = null;
                const { data } = await api.get('/db');
                if(data)
                    userSelected = data.data.find((x: User) => x.email === email && x.password === password);

                if(userSelected){
                    await localStorage.setItem("Usuario", JSON.stringify({name: userSelected.name, email: userSelected.email }))
                    window.location.href = "/home";
                }
                else if(user.email === email && user.password === password)
                {
                    await localStorage.setItem("Usuario", JSON.stringify({name: user.name, email: user.email }))
                    window.location.href = "/home";
                }
                else{
                    if(user.email === email){
                        setErrorMessage("Senha incorreta")
                    }
                    else{
                        setErrorMessage("Usuário não encontrado")
                    }
                }
            }
            catch(error){
                setErrorMessage("Erro ao buscar o usuário!")
            }
        }
    }

    return(
        <Screen>
            <DivContent>
                <div style={{width: "100%"}}>
                    <Title color="#FF6900">Olá!</Title>
                    <Title>Seja bem-vindo.</Title>
                </div>
                <div style={{width: "100%", marginTop: "15px"}}>
                    {errorMessage &&
                        <Message className="error-message">
                            {errorMessage}
                        </Message>
                    }
                    <Input
                        type="email"
                        label="Email"
                        name="email"
                        value={email}
                        onChange={(e: { target: { value: React.SetStateAction<string | undefined>; }; }) => setEmail(e.target.value)}
                        iconStart={<AiOutlineMail style={{color: "#748C94", fontSize: "16px"}}/>}/>
                    <Input
                        type={type}
                        label="Senha"
                        name="Senha"
                        value={password}
                        onChange={(e: { target: { value: React.SetStateAction<string | undefined>; }; }) => setPassword(e.target.value)}
                        iconStart={<AiFillLock style={{color: "#748C94", fontSize: "16px"}}/>}
                        iconBottom={type === "password" ?
                            <AiTwotoneEye onClick={() => changeTypePassword()} style={{color: "#748C94", fontSize: "16px"}}/>
                            :
                            <AiTwotoneEyeInvisible onClick={() => changeTypePassword()} style={{color: "#748C94", fontSize: "16px"}}/>
                        }/>
                        <div style={{width: "100%"}}>
                            <Button variant="contained" marginTop="35px" onClick={() => handleLogin()}>Entrar</Button>
                        </div>
                </div>
            </DivContent>
            <LinkText to="/singup">
                <SmallText>Não tem uma conta?</SmallText><SmallText color="#FF6900" weight={700} marginLeft="5px"> Criar conta</SmallText>
            </LinkText>
        </Screen>
    )
}