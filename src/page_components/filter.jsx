import React, { Component } from 'react';
import '../styles/home.css'
import Navbar from '../components/navbar';
import Header from '../components/header'
import Topbar from '../components/topbar'
import Sidebar from '../components/sidebar'
import '../styles/animate.css'
import Footer from '../components/footer'
import Home_content from '../components/home_content';

class Filter extends Component {
    state = {       
         data:[
             
            {
                id:1,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34],
                prices:[12200,10000]
            },
            {
                id:2,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34],
                prices:[12200,10000]
            },
            {
                id:3,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34],
                prices:[12200,10000]
            },
            {
                id:4,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34],
                prices:[12200,10000]
            },
            {
                id:5,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34],
                prices:[12200,10000]
            },
            {
                id:6,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34],
                prices:[12200,10000]
            },
            {
                id:7,
                image:'z.jpg',
                title:'frying pan',
                counts:[12,34],
                prices:[12200,10000]
            }
         ]
        }
    render() { 

        return(
           <React.Fragment>
               <div className="space-top"style={{marginTop:"80px"}}></div>
               <div className="wrapper">
                   <Topbar />
                   <div className="side">
                       <Sidebar />
                   </div>
                   <Home_content  title="search" data={this.state.data } sliding={false}/>
                   <Footer />
               </div>
           </React.Fragment>
        );
    }
}
 
export default Filter;
