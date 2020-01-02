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
                    return <Card key={item.id} image={item.image} title={item.title} counts={item.counts} prices={item.prices}/>
                })
            }
                
            </div>
        );
    }
}
 
export default Cards;