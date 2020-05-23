import React from 'react';
import Header from '../Header';
import Feed from '../Feed';

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