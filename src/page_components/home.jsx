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
                theme:['#FDB730','#752500'],
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
               <Header />
               <div className="wrapper">
                   <Topbar />
                   <div className="side">
                       <Sidebar />
                   </div>
                   <Home_content  title='recomended' data={this.state.data } sliding={true}/>
                   <Footer />
               </div>
           </React.Fragment>
        );
    }
}
 
export default Home;
