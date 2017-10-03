import React from 'react';
// import SearchBar from '../components/SearchBar';
import SearchContainer from '../components/SearchContainer';
import '../styles/Surf.css';
class Surf extends React.Component {
  render() {
    return (
      <div className="surf-search">
        {/* <SearchBar /> */}
        <i className="fa fa-globe Header__nav-icon" aria-hidden="true"/>
        <SearchContainer />
      </div>

    );
  }


}

export default Surf;
