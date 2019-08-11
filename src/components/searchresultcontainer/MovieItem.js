import React, { Component } from 'react';
import ImageContainer from './ImageContainer.js';

import './MovieItem.css';
class MovieItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="col-lg-3 col-sm-6 col-xs-12 movieItem">
                <div>
                    <ImageContainer url={this.props.data.Poster} altTxt={this.props.data.Title} />
                    <div className="movieDetail">
                        <p>Name: {this.props.data.Title}</p>
                        <p>Year: {this.props.data.Year}</p>
                        <p>imdbID: {this.props.data.imdbID}</p>
                        <p>Type: {this.props.data.Type}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default MovieItem;