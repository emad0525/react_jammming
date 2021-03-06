import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state.search = this.state.search.bind(this);
    this.state.handleTermChange = this.state.handleTermChange.bind(this);
  },

  search() {
    this.props.onSearch
  },

  handleTermChange(event) {
    this.search(event.target.value)
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a>SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
