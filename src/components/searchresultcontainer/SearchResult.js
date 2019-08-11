import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMovieList } from '../../actions';
import MovieItem from './MovieItem.js';
import Pagination from './Pagination.js';
import './SearchResult.css';
const mapStateToProps = state => {
    return { page: state.page, s: state.s, items: state.items, isLoading: state.isLoading };
  };
  
function mapDispatchToProps(dispatch) {
return {
    getMovieList: payload => dispatch(getMovieList(payload))
};
}
class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.page = 1;
    };
    componentDidMount() {
        this.props.getMovieList({s: this.props.s, page: this.props.page});
    }
    render() {
        const propVal = this.props;
        return (
            <div className="container">
                { propVal.isLoading ? <div className="text-center"><div className="spinner-grow" role="status"/><div className="spinner-grow" role="status"/><div className="spinner-grow" role="status"/><div className="spinner-grow" role="status"/>
    </div> : <div> { propVal.s ? <div className="searchResult"><h3>You have searched for: {propVal.s}, {propVal.items.totalResults > 0 ? <span>{ this.props.items.totalResults}</span>:<span>No</span>} records found</h3>
    { propVal.items && propVal.items.Search ? <div><div className="row">
        {propVal.items.Search.map((item,i) => <MovieItem key={i} data={item}/>)}
    </div>{propVal.items.totalResults>10 ? <Pagination page={propVal.page}/> : ''}</div>
    : ''}
    </div>: ''}
    </div>
}   
    </div>
    );
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);