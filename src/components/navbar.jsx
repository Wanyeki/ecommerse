import '../styles/navbar.css';
import React, { Component } from 'react';

class Navbar extends Component {
    state = { 
        collapsed:true,
        db_data:{
            messages:2,
            favourite:1
        }


    }

    toggleHandler=()=>{
        if(this.state.collapsed){
             document.querySelector('.nav-links').style.display='none';
             this.setState({collapsed:false});
        }else{
             document.querySelector('.nav-links').style.display='flex';
              this.setState({collapsed:true } );
        
              }}

    render() { 
        return (
<div className="navbar">
    <div className="nav">
        <div className="nav-left">
            <div className="brand">
                <h3>Wanyeki</h3>
            </div>
            <div className="search-area">
                <input type="text" className="search" placeholder="search items(eg phone)"/>
                <button className="search-btn"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
        <h1 className=" fa fa-bars toggler" onClick={this.toggleHandler}></h1>        

        </div>
        <div className="nav-right">
            <ul className="nav-links animate slideInDown">
                <li className="nav-link"><i class="fa fa-comment nav-icon has-pill"><div className="pill">{this.state.db_data.messages}</div></i></li>
                <li className="nav-link"><i class="fa fa-heart nav-icon has-pill"><div className="pill">{this.state.db_data.favourite}</div></i></li>
                <li className="nav-link"><i class="fa fa-plus nav-icon has-pill"></i></li>
                <li className="nav-link"><i class="fa fa-shopping-cart nav-icon has-pill"><div className="pill">{this.state.db_data.messages}</div></i></li>
                <li className="nav-link"><i class="fa fa-question nav-icon has-pill"></i></li>
                <li className="nav-link nav-link-active">Sign up</li>

            </ul>
        </div>
    </div>
</div>


          );
    }
}
 
export default Navbar;