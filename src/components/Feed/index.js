import React from 'react';
import socketClient from 'socket.io-client';

// components
import Card from '../Card';

// styles
import './feed.scss';

const FEED_MAX_SIZE = 100;

const SOCKET_PATH = '/socket/feed/twitter';
const SOCKET_CHANNEL = 'twitter-stream';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: [] };
  }

  componentDidMount() {
    const socket = socketClient(process.env.REACT_APP_SOCKET_HOSTNAME, { path: SOCKET_PATH });

    socket.on(SOCKET_CHANNEL, data => {
      this.feedDidChange(data);
    });
  }

  feedDidChange(data) {
    const feed = this.state.feed;

    feed.unshift(data);
    if (feed.length > FEED_MAX_SIZE) {
      feed.splice(-1, 1);
    }

    this.setState({ feed: feed });
  }

  render() {
    return (
      <div className="feed">
        {this.state.feed.map((post, index) => <Card key={index} post={post} />)}
      </div>
    );
  }
}