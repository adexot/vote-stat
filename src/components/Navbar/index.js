import React, { Component } from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types'
import './navbar.scss'

const pages = [
  {
    title: 'Presidential Candidates',
    link: '/'
  },
  {
    title: 'Election Statistics',
    link: '/statistics'
  },
  {
    title: 'The team',
    link: '/team'
  }
];

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileMenu: false
    };
  }

  toggleMobileNavMenu(){
    this.setState(prevState => ({
      showMobileMenu: !prevState.showMobileMenu
    }));
  }

  render() {
    const { showMobileMenu } = this.state;
    const mobileMenuClass = `navbar-list ${ showMobileMenu ? 'show': '' }`;
    let pagePathName = '/';
    // This check is written to avoid Gatsby build failure
    try{
      pagePathName = window && window.location.pathname;
    } catch (e) {
      console.log('Gatsby Error: No reference to window on the server');
    }

    return <nav className="navbar">
        <Link to="/" className="logo">
          <img src="https://res.cloudinary.com/adexot/image/upload/c_scale,w_40/v1549125892/Election2019/coat_of_arms.png" className="logo-image" alt="" />
        </Link>
        <ul className={mobileMenuClass}>
          <li className="mobile-menu-header">
            <div>
              <img src="https://res.cloudinary.com/adexot/image/upload/c_scale,w_40/v1549125892/Election2019/coat_of_arms.png" className="logo-image" alt="" />
            </div>
            <button className="close-icon" onClick={() => this.toggleMobileNavMenu()}>
              &times;
            </button>
          </li>
          {pages.map((navItem, index) => (
            <li
              key={index}
              className={navItem.link === pagePathName ? 'active' : ''}
            >
              <Link to={navItem.link}>
                <span>{navItem.title}</span>
              </Link>
            </li>
          ))}
          <li className="info">
            This is not an official site. The information displayed are
            sourced from INEC & Wikipedia
          </li>
        </ul>
        {/* FIXME: make this a button */}
        <div className="mobile-menu" onClick={() => this.toggleMobileNavMenu()}>
          {/* FIXME: use svg icon here */}
          &#9776;
        </div>
      </nav>
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
