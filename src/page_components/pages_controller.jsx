import React, { Component } from 'react'
import Navbar from '../components/navbar'
import Home from '../page_components/home'
import Filter from '../page_components/filter'
import Show from './show'
import Sell from './sell'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
class Pages_controller extends Component{
    state={
        

    }
    
    render(){
        return(
            <Router>
            <React.Fragment>
               <Navbar />
<Switch>
                <Route path="/" exact component={Home} />
                <Route path="/show/:item" exact component={Show}/>
                <Route path="/:selector/:query"  component={Filter}/>
                <Route path="/sell" component={Sell}/>
</Switch>                
            </React.Fragment>
            </Router>
        );
    }

}
export default Pages_controller;