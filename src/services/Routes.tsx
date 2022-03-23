import React, {Component} from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Welcome, Login, Home, Singup } from "../Container";
import { isAuthenticated } from './auth';

export default function Routes(){
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={() => <Welcome/>}/>
                <Route exact path="/login" component={() => <Login/>}/>
                <Route exact path="/singup" component={() => <Singup/>}/>
				{isAuthenticated() ?
                    <Route exact path="/home" component={() => <Home/>}/>
                    :
                    <Redirect to="/"/>
                }
			</Switch>
		</BrowserRouter>
	)
}