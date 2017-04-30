import React from 'react';
import SearchContainer from './SearchContainer';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form action="/search" acceptCharset="UTF-8" method="get">
        <input name="utf8" type="hidden" value="√" />
        <div className="search-logo" >
          <i className="fa fa-search"></i>
        </div>
        <input
          onFocus={() => this.props.showDropdown()}
          onBlur={() => this.props.hideDropdown()}
          value={this.props.term}
          onChange={(event) => {this.handleInputChange(event.target.value)}}
          placeholder="Search"
          autoComplete="off"
          type="search"
          name="search[q]"
          id="search_q" />
      </form>
    );
  }

  handleInputChange(term) {
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
