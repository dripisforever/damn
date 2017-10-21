import React from 'react';
import { Link } from 'react-router';
import blackViewsLogo from '../images/black-views-logo.png';
import getLogo from '../utils/helpers';
// import SearchBar from '../components/SearchBar';
// import SearchContainer from '../components/SearchContainer';
import SurfContainer from '../containers/SurfContainer';
import '../styles/Surf.css';
class Surf extends React.Component {
  render() {
    const logoUrl = require(`../images/black-views-logo.png`);
    return (


      <div className="surf-search__main">
        <div className="Header__logo-link">
          <Link to="/feed" className="Header__logo-link"><img className="SALAM" src={logoUrl} alt="img"/></Link>
        </div>
        <div className="surf-search">
          <SurfContainer />
        </div>

      </div>

    );
  }


}

export default Surf;
