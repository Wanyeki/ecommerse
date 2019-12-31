import React, { Component } from 'react';
class Topbar extends Component {
    state = {  }
    render() { 
        return ( <div className="top-bar">
        <div className="top-bar-title">
           Filters
        </div>
    <div className="top-bar-item">Popular</div>
    <div className="top-bar-item">most liked</div>
    <div className="top-bar-item">Nearby</div>
    <div className="top-bar-item">Recent</div>
    <div className="top-bar-item">age</div>
    <div className="top-bar-item bar-active">Recomended</div>
    </div>  );
    }
}
 
export default Topbar;