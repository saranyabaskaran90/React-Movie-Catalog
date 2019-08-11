import React, { Component } from 'react';
import './Header.css';
import SearchBox from '../searchBox/SearchBox.js';
class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Header">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12"><h2>Movie Catalog</h2></div>
                <SearchBox />
                <div className="d-flex align-items-center p2 fltRgt"><i class="fa fa-user fa-2 pr-2" aria-hidden="true"></i>Saranya Devi Baskaran</div>
                </div>
            </div>
            );
    }
}
export default Header;