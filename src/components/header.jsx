import React, { Component } from 'react';
import header_img from '../images/food.jpg'

class Header extends Component {
    state = {  }
    render() { 
        return (  
            <div className="header">
            <img src={header_img} alt="" />
          </div>
        );
    }
}
 
export default Header;