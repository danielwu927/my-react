import React, { Component }from 'react';
import {Link } from 'react-router-dom';

class Repos extends Component{
 	render(){
 		return(
 			<div>
 				<h2>Repos</h2>
 				<ul>
 				   <li><Link to="/repos/reactjs/react-router">React Router></Link></li>
 				   <li><Link to="/repos/facebook/react">React Router></Link></li>
 				</ul>
                 <ul>{this.props.children}</ul>
 			</div>
             
 			);
 	}

}
export default Repos;