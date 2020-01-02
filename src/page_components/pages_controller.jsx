import React, { Component } from 'react'
import Navbar from '../components/navbar'
import Home from '../page_components/home'

class Pages_controller extends Component{
    state={
        current_page:{
            page:'home',
            title:'Recomeded',
            sliding:true,
        }

    }
    change_page=page_params=>{
        this.setState({current_page:page_params});   
    }
    render(){
        switch (this.state.current_page.page) {
            case 'home':
                return(
                    <Home title={this.state.current_page.title} sliding={this.state.current_page.sliding} change_page={this.change_page}/>
                );
                break;
        
            default:
                break;
        }
    }

}
export default Pages_controller;