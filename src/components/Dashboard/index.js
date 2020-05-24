import React from 'react';

// components
import Header from '../Header';
import Feed from '../Feed';

// styles
import './dashboard.scss';

export default class Dasboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
        <Feed />
      </div>
    )
  }
}