import React from 'react';
// import SearchBar from '../components/SearchBar';
import SearchContainer from '../components/SearchContainer';
import '../styles/Surf.css';
class Surf extends React.Component {
  render() {
    return (
      <div className="surf-search">
        {/* <SearchBar /> */}
        <SearchContainer />
      </div>

    );
  }


}

export default Surf;
