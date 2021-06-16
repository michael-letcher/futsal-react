import React from 'react';
import logo from '../../logo.svg';
import './navbar.scss';
import '../../styles/container.css';
import { Link } from 'react-router-dom';
import { AppUrls } from '../../app-router';

const LINKS = [
  {
    title: 'Home',
    url: AppUrls.home,
  },
  {
    title: 'About',
    url: AppUrls.about,
  },
  {
    title: 'Fixture',
    url: AppUrls.fixture,
  },
  {
    title: 'Table',
    url: AppUrls.table,
  },
  {
    title: 'Teams',
    url: AppUrls.home,
  },
  {
    title: 'Rules',
    url: AppUrls.rules,
  },
  {
    title: 'Venues',
    url: AppUrls.venues,
  },
];

function Navbar() {
  return (
    <div>
      <header className="app-header container">
        <img src={logo} className="app-logo" alt="logo" />
        <span>Evolution Fustal</span>
      </header>
      <nav className="nav-bar">
        <div className="container">
          <ul>
            {LINKS.map(link => (
              <li key={link.title}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
