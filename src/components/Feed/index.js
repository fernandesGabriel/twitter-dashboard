import React, { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';
import Card from '../Card';

const FEED_MAX_SIZE = 100;

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: [] };
  }

  componentDidMount() {
    const socket = socketClient(process.env.REACT_APP_SOCKET_HOSTNAME, { path: '/socket/feed' });

    socket.on('feed', data => {
      if (data) {
        this.feedDidChange(data);
      }
    });
  }

  feedDidChange(data) {
    const feed = this.state.feed;

    feed.unshift({ text: data });
    if (feed.length > FEED_MAX_SIZE) {
      feed.splice(-1,1);
    }

    this.setState({ feed: feed });
  }

  render() {
    return (
      <div>
        {this.state.feed.map((post) => <Card {...post} /> )}
      </div>
    );
  }
}