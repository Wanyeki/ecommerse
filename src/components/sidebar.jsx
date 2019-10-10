import React, { Component } from 'react';

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
                        Categories
                    </h3>
                    <ul className="side-section-list categories">
                        <li className="category side-section-item active-item"><i className="fa fa-tshirt"></i> clothings</li>
                        <li className="category side-section-item"><i className="fa fa-pizza-slice"></i> Food</li>
                        <li className="category side-section-item"><i className="fa fa-book"></i> Books</li>
                        <li className="category side-section-item"><i className="fa fa-bicycle"></i> Bikes</li>
                        <li className="category side-section-item"><i className="fa fa-laptop"></i> Laptops</li>
                        <li className="category side-section-item"><i className="fa fa-mobile-alt"></i> Smart phones</li>
                        <li className="category side-section-item"><i className="fa fa-pizza-slice"></i> Food</li>
                        <li className="category side-section-item"><i className="fa fa-tshirt"></i> clothings</li>
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