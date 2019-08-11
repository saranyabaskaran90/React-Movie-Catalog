import React, { Component } from 'react';
import './ImageContainer.css';
import defaultImg from '../../assets/default.png';
class ImageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: props.url
          };
    }
    onError (e) {
        this.setState({
            src: defaultImg
        })
    }
    render() {
        return(
            <div className="img-container d-flex align-items-center">
                <img className="img-fluid" src={this.state.src} alt={this.props.altTxt} onError={this.onError.bind(this)}></img>
            </div>
        );
    }
} 
export default ImageContainer