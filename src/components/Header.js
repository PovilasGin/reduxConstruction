import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props)=>{
    return (
        <header>
          <NavLink exact to="/" activeClassName='active'>Home</NavLink>
          <NavLink exact to="/clients" activeClassName='active'>clients</NavLink>
          <NavLink exact to="/workers" activeClassName='active'>workers</NavLink>
          <NavLink exact to="/services" activeClassName='active'>services</NavLink>
          <NavLink exact to="/settings" activeClassName='active'>settings</NavLink>
          <NavLink exact to="/cars" activeClassName='active'>cars</NavLink>
        </header>
    );
};
export default Header