import React, { Component } from 'react';
import Card from '../components/card'

class Cards extends Component {
    state = {
      }
    render() { 
        return (  
            <div className="cards">
                {
                this.props.items.map(item=> {
                    return <Card id={item.id} key={item.id} image={item.image} title={item.title} counts={item.counts} txt_color={'#000'} prices={item.prices}/>
                })
            }
                
            </div>
        );
    }
}
 
export default Cards;