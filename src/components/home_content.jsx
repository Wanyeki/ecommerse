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
            return  <Sliding_cards  items={row.items} slider_title={row.title} theme={row.theme} key={row.id}/>   
          })}
        </div> 

          );
      }else{
               return (
               <div className="home-content">
              <h1 className="section-title">{this.props.title}</h1>
               <Cards  items={this.props.data} />
               </div> 
               );
      }
        
    
}
}
export default Home_content;