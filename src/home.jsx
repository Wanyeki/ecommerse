import React, { Component } from 'react';
import './styles/home.css'
import Navbar from './components/navbar';
import Header from './components/header'
import Topbar from './components/topbar'
import Sidebar from './components/sidebar'
import Cards from './components/cards'
import './styles/animate.css'
import Footer from './components/footer'

class Home extends Component {
    state = {  }
    render() { 
        return(
           <React.Fragment>
               <Navbar/>
               <Header/>
               <div className="wrapper">
                   <Topbar/>
                   <div className="side">
                       <Sidebar/>
                   </div>
                   <Cards/>
                   {/* <Footer/> */}
               </div>
           </React.Fragment>
        );
    }
}
 
export default Home;
