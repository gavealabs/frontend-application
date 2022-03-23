import React from "react";
import Logo from "../../assets/svg/logo";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../Components/";
import { Screen, MessageWelcome, DivCenter } from "./style";
import { isAuthenticated } from "../../services/auth"; 

export default function Welcome(){
    const history = useHistory();

    const verifyLogin  = () => {
        if(isAuthenticated()){
            history.push("/home");
        }
        else{
            history.push("/login");
        }
    }

    return(
        <Screen>
            <div style={{marginTop: "10%"}}>
                <Logo/>
            </div>
            <div style={{paddingBottom: "50px"}}>
                <MessageWelcome>
                    Bem-vindo a sua bolsa digital de commodities
                </MessageWelcome>
                <DivCenter>
                    <div style={{ width: "100%" }}>
                        <Button variant="contained" onClick={() => verifyLogin()}>Entrar</Button>
                    </div>
                    <Link to="/singup" style={{ width: "100%" }}>
                        <Button variant="outlined" marginTop="10px">Criar Conta</Button>
                    </Link>
                </DivCenter>
            </div>
        </Screen>
    )
}