/*
* function:router for React
* note: 此页面为项目下所有前端页面的路由，需要在模板页面的js文件里引入此文件
* author:wudi
*/
import React, { Component } from 'react';
import {Switch, Route , BrowserRouter, Link} from 'react-router-dom';
import NormalLoginForm from '../Login';
import RegistrationForm from '../Register';
import App from '../App';
import Repos from '../Repos';
import Repo from '../Repo';
import MyHome from '../Home';

class MyRoute extends Component{
    render() {
    	return (
    		<BrowserRouter >
    			<div>
    			 <Route exact path="/" component={App}/>
    			 <Route path="/login" component={NormalLoginForm}/>
    			 <Route path="/reg" component={RegistrationForm}/>   
    			 <Route path="/repos"component={Repos}/>
                 <Route path="/home" component={MyHome}/>
    			 	<Route path="/repos1/123456" component={Repo}/>
                    <Route path="/repos/reactjs/react-router" component={Repo}/>
                    <Route path="/repos/:userName/:repoName" component={Repo}/>
        
                <Route path="repos/:name" component={Repo}/>

        
    		 	</div>
    		</BrowserRouter>
    	);
    }
    
}

export default MyRoute;