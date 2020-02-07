import React, { Component } from 'react'
import '../styles/search_recs.css'
export default class Search_recomedations extends Component {
    render() {
        return (
            <div className="search-rec" style={this.props.sstyle}>
                <ul className="recs">
                    <div className="rec"> <li className="rec-text">phone in electronics</li><i className="fa fa-times" aria-hidden="true"></i></div>
                    <div className="rec"> <li className="rec-text">phone in electronics</li><i className="fa fa-times" aria-hidden="true"></i></div>
                    <div className="rec"> <li className="rec-text">phone in electronics</li><i className="fa fa-times" aria-hidden="true"></i></div>
                    <div className="rec"> <li className="rec-text">phone in electronics</li><i className="fa fa-times" aria-hidden="true"></i></div>
                    <div className="rec"> <li className="rec-text">phone in electronics</li><i className="fa fa-times" aria-hidden="true"></i></div>


                </ul>
            </div>
        )
    }
}
