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

// TODO: refactor this to use the pages constant above and also show the state of the current navigation in the navbar
const Navbar = ({ siteTitle }) => (
  <nav className='navbar'>
    <ul>
      <li className='logo'>logo</li>
      <li>
        <Link to='/'>Presidential Candidates</Link>
      </li>
      <li>
        <Link to='/statistics'>Election Statistics</Link>
      </li>
      <li className='active'>
        <Link to='/team'>The Team</Link>
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
