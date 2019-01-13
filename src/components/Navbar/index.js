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
    const pagePathName = '';
    // This check is written to avoid Gatsby build failure
    if(typeof window !== undefined){
      pagePathName = window && window.location.pathname;
    }

    return (
      <nav className='navbar'>
        <Link to='/' className='logo'>logo</Link>
        <ul className={mobileMenuClass}>
          {pages.map((navItem, index) => (
            <li key={index} className={navItem.link === pagePathName ? 'active' : ''}>
              <Link to={navItem.link}>{navItem.title}</Link>
            </li>
          ))}
          <li className='info'>This is not an official site. The information displayed are sourced from INEC & Wikipedia</li>
        </ul>
        {/* FIXME: make this a button */}
        <div
          className='mobile-menu'
          onClick={() => this.toggleMobileNavMenu()}
        >
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
