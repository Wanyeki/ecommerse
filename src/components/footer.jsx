import React, { Component } from 'react';
import '../styles/footer.css'

 class Footer extends  Component{
 state={

 }
render(){
    return(
        <div className="footer">
            <ul className="footer-left">
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
            </ul>
            <ul className="footer-center">
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
            </ul>
            <ul className="footer-right">
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
                <li className="footer-link">About</li>
            </ul>
        </div>
    )
}
 }
 export default Footer;