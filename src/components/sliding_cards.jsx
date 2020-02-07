import React, { Component } from 'react';
import Card from './card'
import '../styles/glider.min.css'
// import {Glide} from 'react-glide'; 

class Sliding_cards extends Component {
    state={
    }
    render(){
        return(
                <div className="sliding-cards" style={{backgroundColor:this.props.theme[0]}}>
                    <h3 className="section-title" style={{color:this.props.theme[1]}}>{this.props.slider_title}</h3> 
                    <div className="glider-contain">
                    <div className="glider">
                        {
                            this.props.items.map(item=>{
                                return <Card id={item.id} txt_color={this.props.theme[1]} key={item.id} image={item.image} title={item.title} counts={item.counts} prices={item.prices}/>
                            })
                        }
                    </div>
                        {/* <button className="glider-prev">&laquo;</button>
                        <button className="glider-next">&raquo;</button> */}
                    <div id="dots"></div>
                    </div> 


                </div>
        );
    }
}

export default Sliding_cards;