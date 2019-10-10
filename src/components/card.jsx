import React, { Component } from 'react';
import image from '../images/z.jpg'
class Card extends Component {
    state = {  }
    render() { 
        return (  <div className="w-card">
        <div className="card-img">
              <div className="card-title">{this.props.title}</div>
          <img src={image} alt=""/>
              <div className="card-bottom">
              <button className="w-btn"><i className="fa fa-cart-plus"></i> </button>
              <div className="likes"><i className="fa fa-thumbs-up"></i><span>{this.props.counts[0]}</span></div> 
               <div className="likes"><i className="fa fa-eye"></i><span>{this.props.counts[1]}</span></div>
              
          </div>
      </div>
  </div> );
    }
}
 
export default Card;