import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <input type="text" placeholder="Cerca" />
        <i className="fa fa-search"></i>
      </React.Fragment>
    );
  }
}
export default Search;
