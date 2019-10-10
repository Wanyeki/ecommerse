import React, { Component } from 'react';
import Card from '../components/card'

class Cards extends Component {
    state = {
        items:[
            {
                id:1,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            },
            {
                id:2,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            },
            {
                id:3,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            },
            {
                id:4,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            },
            {
                id:5,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            },
            {
                id:6,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            },
            {
                id:7,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            },
            {
                id:8,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            },
            {
                id:9,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            },
            {
                id:10,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            },
            {
                id:11,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            },
            {
                id:12,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34]
            }


        ]
      }
    render() { 
        return (  
            <div className="cards">
                {
                this.state.items.map(item=> {
                    return <Card key={item.id} image={item.image} title={item.title} counts={item.counts}/>
                })
            }
                
            </div>
        );
    }
}
 
export default Cards;