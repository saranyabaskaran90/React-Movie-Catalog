
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMovieList } from '../../actions';

import './Pagination.css';

const mapStateToProps = state => {
  return { items: state.items, s: state.s, page: state.page };
};

function mapDispatchToProps(dispatch) {
  return {
    getMovieList: payload => dispatch(getMovieList(payload))
  };
}
class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 10
    }
  };
  prevClick() {
    this.props.getMovieList({ s: this.props.s, page: Number(this.props.page) - 1 });
  }

  nextClick() {
    this.props.getMovieList({ s: this.props.s, page: Number(this.props.page) + 1 });
  }
  pageItemClick(e) {
    this.props.getMovieList({ s: this.props.s, page: Number(e.target.getAttribute('data-index'))});
  }
  render() {    
    const totalPages= Math.ceil(Number(this.props.items.totalResults) / 10)
    var pageItems=[];
    for (var i = 1; i <= totalPages; i++) {
      pageItems.push(<li key={i} className={"page-item" + (this.props.page===i ? ' active': '')}><a className="page-link" data-index={i} onClick={this.pageItemClick.bind(this)}>{i}</a></li>);
    }
    console.log(this.props);
    const propVal = this.props;
    return (
      <div className="d-flex justify-content-center">
        {this.props.items.totalResults > 10 &&
          <div className="row pagination-container">
            <nav className="row text-xs-center">
              <ul className="pagination">
                <li className= {"page-item"+ (propVal.page == 1 ? ' disabled' : '')}><a className="page-link" onClick={this.prevClick.bind(this)}>Previous</a></li>
                {pageItems}
                <li className={"page-item" + (propVal.page === totalPages ? ' disabled': '')}><a className="page-link" onClick={this.nextClick.bind(this)}>Next</a></li>
              </ul>
            </nav>
          </div>
        }
      </div>);
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);