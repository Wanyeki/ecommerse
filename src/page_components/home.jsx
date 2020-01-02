import React, { Component } from 'react';
import '../styles/home.css'
import Navbar from '../components/navbar';
import Header from '../components/header'
import Topbar from '../components/topbar'
import Sidebar from '../components/sidebar'
import '../styles/animate.css'
import Footer from '../components/footer'
import Home_content from '../components/home_content';

class Home extends Component {
    state = {
        sliding:true,
         data:[
             {
                id:1,
                title:'kitchen',
                theme:['#fff','#000'],
                items:[
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
             },
             {
                id:2,
                title:'Hostels',
                theme:['#CACA2E','#752500'],
                items:[
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
             },
             {
                id:3,
                title:'sponsored',
                theme:['#fff','#000'],
                items:[
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
             },
             {
                id:4,
                title:'black friday ...20% offer',
                theme:['rgb(32, 32, 32)','#fff'],
                items:[
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
             },
             {
                id:5,
                title:'most selling',
                theme:['#fff','#000'],
                items:[
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
             },
             {
                id:6,
                title:'kitchen',
                theme:['#fff','#000'],
                items:[
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
             },
         ]
        }
    render() { 
        return(
           <React.Fragment>
               <Navbar changepage={this.props.changepage}/>
               <Header changepage={this.props.changepage}/>
               <div className="wrapper">
                   <Topbar changepage={this.props.changepage}/>
                   <div className="side">
                       <Sidebar changepage={this.props.changepage}/>
                   </div>
                   <Home_content changepage={this.props.changepage} title={this.props.title} data={this.state.data } sliding={this.state.sliding}/>
                   <Footer changepage={this.props.changepage}/>
               </div>
           </React.Fragment>
        );
    }
}
 
export default Home;
