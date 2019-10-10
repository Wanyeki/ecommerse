import React, { Component } from 'react';
class Topbar extends Component {
    state = {  }
    render() { 
        return ( <div className="top-bar">
        <div className="top-bar-title">
           Filters
        </div>
    <div className="top-bar-item">Popular</div>
    <div className="top-bar-item">liked most</div>
    <div className="top-bar-item">Near me</div>
    <div className="top-bar-item">Recent uploaded</div>
    <div className="top-bar-item">Item age</div>
    <div className="top-bar-item bar-active">Recomended</div>
    </div>  );
    }
}
 
export default Topbar;