import React, { Component } from "react";
import { PropTypes } from "prop-types";

 class Pagination extends Component {
  
  _handleClick = () =>{
      this.props.nextPage();
  }  

  render() {
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            {this.props.children}
            <li class="page-item">
              <button class="page-link" onClick={this._handleClick}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Pagination.PropTypes = {
  nextPage: PropTypes.func.isRequired,  
}
export default Pagination;