import React from "react";
import Logo from "../../assets/svg/logo";
import { ListItem } from "../../Components/";
import { Screen, LogoHeader, Box, IconUser, Introduction, SmallIntroduction, Description, DivList, DivContent, Head } from "./style";

export default function Home(){
    const [name, setName] = React.useState<string>("");

    interface ListTypes {
        name: string,
        date: string,
        amount: number,
        value: number,
        iconName: string
    };

    const [listItems, setListItems] = React.useState<ListTypes[]>([]);

    React.useEffect(() => {
        let value = localStorage.getItem("Usuario");
        if(value){
            let user = JSON.parse(value);
            setName(user.name);
        }

        let newList: ListTypes[] = [
            {
                name: "AgAmerica",
                date: "Fev/21",
                amount: 2000,
                value: 164.50,
                iconName: "avatar01"
            },
            {
                name: "TrFood",
                date: "Fev/21",
                amount: 2000,
                value: 164.50,
                iconName: "avatar02"
            },
            {
                name: "GOSC",
                date: "Fev/21",
                amount: 2000,
                value: -164.50,
                iconName: "avatar03"
            },
            {
                name: "AgCerr",
                date: "Fev/21",
                amount: 2000,
                value: -164.50,
                iconName: "avatar04"
            },
            {
                name: "Agro1001",
                date: "Fev/21",
                amount: 2000,
                value: 164.50,
                iconName: "avatar05"
            },
            {
                name: "AgAmerica",
                date: "Fev/21",
                amount: 2000,
                value: 164.50,
                iconName: "avatar06"
            },
            {
                name: "TrFood",
                date: "Fev/21",
                amount: 2000,
                value: 164.50,
                iconName: "avatar01"
            }
        ];

        setListItems(newList);
    }, [])

    return(
    <Screen>
        <LogoHeader>
            <Logo/>
        </LogoHeader>
        <DivContent>
            <Box>
                <IconUser>{name.substr(0, 2)}</IconUser>
                <div style={{width: "calc(82% - 55px)"}}>
                    <Introduction>Olá, {name}</Introduction>
                    <SmallIntroduction>Gavea Marketplace</SmallIntroduction>
                </div>
            </Box>
        </DivContent>
        <Head>
             <Description width="42%" style={{textAlign: "center"}}>Part</Description>
             <Description width="19%">Pag</Description>
             <Description width="19%">Ton</Description>
             <Description width="19%">R$</Description>
        </Head>
        <DivList>
            {listItems.map((list, i) =>
                <ListItem
                    key={i}
                    name={list.name}
                    date={list.date}
                    amount={list.amount}
                    value={list.value}
                    iconName={list.iconName}
                />
            )}
        </DivList>
    </Screen>)
}