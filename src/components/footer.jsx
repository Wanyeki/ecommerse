import React, { Component } from 'react';
import '../styles/footer.css'
import logo from'../images/logo.svg'
import { returnStatement } from '@babel/types';

 class Footer extends  Component{
 state={

 }
render(){
    return(
        <div className="footer">
            <div className="logos">
                <img src={logo} alt=""/>
                <span>Wanyeki</span>
            </div>
            <ul className="footer-left">
                <li className="footer-link">About</li>
                <li className="footer-link">Contacts</li>
              
            </ul>
            <ul className="footer-center">
                <li className="footer-link">licence</li>
                <li className="footer-link">offices</li>
 
               
            </ul>
            <ul className="footer-right">
                <li className="footer-link">email</li>
                <li className="footer-link">suggestion</li>

            </ul>
        </div>
    )
}
 }
 export default Footer;