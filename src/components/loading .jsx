import React, { Component } from 'react';
import '../styles/loading.css';

class Loading extends Component {
    state = {  }
    render() { 
        return (  
            <div className="lds-css ng-scope" style={{display:this.props.disp}}>
  <div className="lds-spinner" style={{width:'100%' , height:'100%' }}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
        );
    }
}
 
export default Loading;
 
