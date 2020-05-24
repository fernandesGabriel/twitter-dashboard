import React from 'react';
import socket from '../../providers/socket'

// components
import Card from '../Card';
import Loader from '../Loader';

// styles
import './feed.scss';

const FEED_MAX_SIZE = 100;

const SOCKET_CHANNEL = 'twitter-stream';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: [] };
  }

  componentDidMount() {
    socket.on(SOCKET_CHANNEL, (data) => {
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
        {
          this.state.feed.length > 0
            ? this.state.feed.map((post, index) => <Card key={index} post={post} />)
            : <div className="feed-loader"><Loader /></div>
        }
      </div>
    );
  }
}