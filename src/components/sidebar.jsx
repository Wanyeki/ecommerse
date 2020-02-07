import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Sidebar extends Component {
    state = {  }
    render() { 
        return (  <div className="sidebar">
        <div className="toggling">
            <div className="bars"><i className="fa fa-bars"></i></div>
            <div className="cancel"><i className="fa fa-times-circle"></i></div>
          </div>
            <div className="sidebar-content">
                <div className="categories-section side-section">
                    <h3 className="side-title">
                    tshirt            Categories
                    </h3>
                    <ul className="side-section-list categories">
                        <Link to="/category/tshirt"> <li className="category side-section-item active-item"><i className="fa fa-tshirt"></i> clothings</li></Link>
                        <Link to="/category/food"> <li className="category side-section-item"><i className="fa fa-pizza-slice"></i> Food</li></Link>
                        <Link to="/category/books"> <li className="category side-section-item"><i className="fa fa-book"></i> Books</li></Link>
                        <Link to="/category/bikes"> <li className="category side-section-item"><i className="fa fa-bicycle"></i> Bikes</li></Link>
                        <Link to="/category/laptop"> <li className="category side-section-item"><i className="fa fa-laptop"></i> Laptops</li></Link>
                        <Link to="/category/phone"> <li className="category side-section-item"><i className="fa fa-mobile-alt"></i> Smart phones</li></Link>
                        <Link to="/category/food"> <li className="category side-section-item"><i className="fa fa-pizza-slice"></i> Food</li></Link>
                        <Link to="/category/clothings"> <li className="category side-section-item"><i className="fa fa-tshirt"></i> clothings</li></Link>
                    </ul>
                </div>

                <div className="areas-section side-section">
                        <h3 className="side-title">
                            Area
                        </h3>
                        <ul className="side-section-list areas">
                            <li className="area side-section-item"><i className="fa fa-map-marker-alt"> </i> Mabungo</li>
                            <li className="area side-section-item"><i className="fa fa-map-marker-alt"> </i> New sunrise</li>
                            <li className="area side-section-item"><i className="fa fa-map-marker-alt"> </i> Vet</li>
                            <li className="area side-section-item"><i className="fa fa-map-marker-alt"> </i> Nyawita</li>
                            <li className="area side-section-item"><i className="fa fa-map-marker-alt"> </i> Makerere</li>
                        
                        </ul>
                    </div>



            </div>
        </div> );
    }
}
 
export default Sidebar;