import React, { Component } from 'react'
import Navbar from '../components/navbar';
import '../styles/show.css'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
class Show extends Component{
    state={

    }
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="wrapper">
                   <div className="side">
                       <Sidebar />
                   </div>
                   <div className="page show">
                    <h1>hello world</h1>
                </div>
                   <Footer />
               </div>
            </React.Fragment>
        );
    }
}
export default Show