
import React, { Component } from 'react';
import './SearchBox.css';

import { connect } from "react-redux";
import { getMovieList } from '../../actions';

const mapDispatchToProps = dispatch => {
    return {
        getMovieList: payload => dispatch(getMovieList(payload))
    };
}

class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: null,
            loading: false,
            value: ''
          };
    }
    search = e => {
            this.props.getMovieList({s: this.refs.s.value, page: 1});
    }

    render() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                <input type="text" id="searchText" placeholder="Enter the movie to search"  ref="s" onChange={this.search.bind(this)}></input>
            </div>
        );
    }
}
export default connect(null, mapDispatchToProps)(SearchBox);