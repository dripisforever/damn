import React from 'react';
// import '../styles/Searchbar.css';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(term) {
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <form action="/search" acceptCharset="UTF-8" method="get">

        <input name="utf8" type="hidden" value="√" />
        <div className="search-logo" >
          <i className="fa fa-globe Header__nav-icon" aria-hidden="true"/>
        </div>
        <input
          onFocus={() => this.props.showDropdown()}
          onBlur={() => this.props.hideDropdown()}
          value={this.props.term}
          onChange={(event) => {this.handleInputChange(event.target.value)}}
          placeholder="Surf"
          autoComplete="off"
          type="search"
          name="search[q]"
          id="search_q" />
      </form>
    );
  }


}

export default SearchBar;
