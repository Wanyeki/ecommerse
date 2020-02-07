import React, { Component } from 'react';
import image from '../images/z.jpg'
import {Link} from 'react-router-dom'
class Card extends Component {
    state = {  }
    text_color=this.props.txt_color?this.props.txt_color:'#fff';
    render() {

        return ( 
                <div className="w-card" >
                        <div className="card-img">
                        <div  style={{color:this.text_color}} className="card-title">{this.props.title}</div>
                       <Link to={"/show/"+this.props.id}>
                           <div className="clickable">
                           <img src={image} alt="" /></div>
                       </Link>
                        <span className="card-prices" ><strike style={{color:this.text_color,textAlign:'center'}}  >ksh{this.props.prices[0]}</strike ><span >ksh{this.props.prices[1]}</span></span>
                        <div className="card-bottom">
                        <button className="w-btn"><i className="fa fa-cart-plus"></i> </button>
                        <div className="likes"><i className="fa fa-thumbs-up"></i><span style={{color:this.text_color}}>{this.props.counts[0]}</span></div> 
                        <div className="likes"><i className="fa fa-eye"></i><span style={{color:this.text_color}}>{this.props.counts[1]}</span ></div>
                        
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default Card;