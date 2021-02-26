import React,{Component} from "react";
import {Link, NavLink} from 'react-router-dom';
class MyNav extends React.Component{
  render()
  {
      const myStyle = {
      textDecoration : 'none'
    }
    return(<div>
             <ul className="bg-dark text-center p-3">
               <NavLink exact activeStyle={{backgroundColor:'white'}} className="text-danger p-3 " to="/" style={myStyle}>Home</NavLink>
               <NavLink exact activeStyle={{backgroundColor:'white'}} to="/About" className="text-success p-3 " style={myStyle}>About</NavLink>
               <NavLink exact activeStyle={{backgroundColor:'white'}} to="/services" className="text-primary p-3 " style={myStyle}>Services</NavLink>
               <NavLink exact activeStyle={{backgroundColor:'white'}} to="/contact" className="text-warning p-3 " style={myStyle}>Contact</NavLink>
               <NavLink exact activeStyle={{backgroundColor:'white'}} to="/reports" className="text-info p-3 " style={myStyle}>Reports</NavLink>
             </ul>
          </div>)
  }
}
export default MyNav;