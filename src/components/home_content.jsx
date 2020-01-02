import React, { Component } from 'react'
import Cards from './cards'
import Sliding_cards from './sliding_cards'

class Home_content extends Component{
state={}

render(){
    if(this.props.sliding){
        return (
          <div className="home-content">
              <h1 className="section-title">{this.props.title}</h1>
             {this.props.data.map(row => { 
            return  <Sliding_cards changepage={this.props.changepage} items={row.items} slider_title={row.title} theme={row.theme} key={row.id}/>   
          })}
        </div> 

          );
      }else{
               return (
               <div className="home-content">
               <Cards changepage={this.props.changepage} items={this.props.data} />
               </div> 
               );
      }
        
    
}
}
export default Home_content;