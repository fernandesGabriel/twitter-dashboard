import React from 'react';

// components
import Search from '../Search';

// styles
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="header-title"> Twitter Dasboard </h1>
        <Search />
      </header>
    )
  }
}
