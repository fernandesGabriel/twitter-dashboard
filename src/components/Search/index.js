import React from 'react';
import socket from '../../services/socket'

// styles
import './search.scss';

const WAIT_INTERVAL = 800
const ENTER_KEY = 13

const SOCKET_CHANNEL = 'twitter-track-for';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { track: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
  }

  componentDidMount() {
    this.timer = null;
  }

  handleChange(event) {
    clearTimeout(this.timer);

    this.setState({ track: event.target.value });

    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  }

  handleKeyDown(event) {
    if (event.keyCode === ENTER_KEY) {
      clearTimeout(this.timer);

      this.triggerChange();
    }
  }

  handleSubmition(event) {
    event.preventDefault();
  }

  triggerChange() {
    const track = this.state.track;

    socket.on('connect', () => {
      socket.emit(SOCKET_CHANNEL, 'searcher', track);
    });
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmition}>
          <span className="search-label"> Tracking for: </span>
          <input className="search-input" type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="Try Javascript" />
        </form>
      </div>
    )
  }
}
