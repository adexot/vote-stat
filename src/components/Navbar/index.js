import React, {Component} from 'react'
import {Link} from 'gatsby';
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
    this.pagePathName = window.location.pathname;
  }

  render (){
    return (
      <nav className='navbar'>
        <Link to='/' className='logo'>logo</Link>
        <ul className='navbar-list'>
          {pages.map(navItem => (
            <li className={navItem.link === this.pagePathName ? 'active' : ''}>
              <Link to={navItem.link}>{navItem.title}</Link>
            </li>
          ))}
          <li className='info'>This is not an official site. The information displayed are sourced from INEC & Wikipedia</li>
        </ul>
        {/* FIXME: make this a button */}
        <div className='mobile-menu'>
            <span></span>
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
