import '../styles/navbar.css';
import React, { Component } from 'react';
import image from '../images/avatar.jpg'
import image2 from '../images/z.jpg'
class Navbar extends Component {
    state = { 
        collapsed:true,
        db_data:{
            messages:2,
            favourite:1
        },
        messages_panel:'none',
        cart_panel:'none'



    }
messages_toggleHandler=()=>{
 this.setState({messages_panel:'block',
                cart_panel:'none'});
}
cart_toggleHandler=()=>{
 this.setState({cart_panel:'block',
                messages_panel:'none'});
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
            <ul className="nav-links animated slideInDown">
                <li className="nav-link" onClick={this.messages_toggleHandler}><i class="fa fa-comment nav-icon has-pill"><div className="pill">{this.state.db_data.messages}
                </div></i>
                <div className="nav-drop animated slideInUp" style={{display:this.state.messages_panel}}>
                    <div className="drop-content">
                        <div className="nav-drop-pointer"></div>
                    <div className="message-screen">
                        <span>Messages</span>
                        <div className="msgs">
                       <div class="recieved"> <img src={image} alt="" className="msg-avatar"/> <div className="message">Your item have 10 more views.</div></div>
                       <div class="recieved"> <img src={image} alt="" className="msg-avatar"/> <div className="message">Wanyeki asks you to join pro version </div></div>
                       <div class="recieved"> <img src={image} alt="" className="msg-avatar"/> <div className="message">Wanyeki asks you to join pro version </div></div>
                       <div class="recieved"> <img src={image} alt="" className="msg-avatar"/> <div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></div>
                        
                      </div>
                      
                      
                    </div>
                    </div>
                </div>
                </li>
                <li className="nav-link"><i class="fa fa-heart nav-icon has-pill"><div className="pill">{this.state.db_data.favourite}</div></i></li>
                <li className="nav-link"><i class="fa fa-plus nav-icon has-pill"></i></li>
                <li className="nav-link" onClick={this.cart_toggleHandler}><i class="fa fa-shopping-cart nav-icon has-pill"><div className="pill">{this.state.db_data.messages}</div></i>
                <div className="cart " style={{display:this.state.cart_panel}}>
                    <div className="cart-items">
                        <div className="cart-content">
                            <span>cart</span>
                            <div className="cart-item">
                               <div className="number">1.</div>
                                <div className="cart-item-image"><img src={image2} alt="" className="cart-item-image"/></div>
                                <div className="cart-item-name">Frying pan</div>
                                <div className="cart-item-price">Ksh 150</div>
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </div>
                            <div className="cart-item">
                               <div className="number">1.</div>
                                <div className="cart-item-image"><img src={image2} alt="" className="cart-item-image"/></div>
                                <div className="cart-item-name">Frying pan</div>
                                <div className="cart-item-price">Ksh 150</div>
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </div>
                            <div className="cart-item">
                               <div className="number">1.</div>
                                <div className="cart-item-image"><img src={image2} alt="" className="cart-item-image"/></div>
                                <div className="cart-item-name">Frying pan</div>
                                <div className="cart-item-price">Ksh 150</div>
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </div>
                            <div className="cart-item">
                               <div className="number">1.</div>
                                <div className="cart-item-image"><img src={image2} alt="" className="cart-item-image"/></div>
                                <div className="cart-item-name">Frying pan</div>
                                <div className="cart-item-price">Ksh 150</div>
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </div>

                            <div className="cart-item">
                               <div className="number">1.</div>
                                <div className="cart-item-image"><img src={image2} alt="" className="cart-item-image"/></div>
                                <div className="cart-item-name">Frying pan</div>
                                <div className="cart-item-price">Ksh 150</div>
                              <i class="fa fa-trash" aria-hidden="true"></i>
                            </div>

                            
                            <button class="btn-p">Send interested messages</button>
                        </div>
                    </div>
                </div></li>
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