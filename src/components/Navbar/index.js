import React from 'react'
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

const Navbar = ({ siteTitle }) => (
  <nav className='navbar'>
    <ul>
      <li className='logo'>logo</li>
      <li>
        <Link to='/'></Link>
      </li>
      <li>
        <Link to='/statistics'>Election Statistics</Link>
      </li>
      <li className='active'>
        <Link to='/team'></Link>
      </li>
      <li className='info'>This is not an official site. The information displayed are sourced from INEC & Wikipedia</li>
    </ul>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
