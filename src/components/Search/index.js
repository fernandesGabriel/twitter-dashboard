import React from 'react';

// styles
import './search.scss';

const WAIT_INTERVAL = 800
const ENTER_KEY = 13

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { watch: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
  }

  componentWillMount() {
    this.timer = null;
  }

  handleChange(event) {
    clearTimeout(this.timer);

    this.setState({ watch: event.target.value });

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
    const watch = this.state.watch;
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmition}>
          <span className="search-label"> Watching for: </span>
          <input className="search-input" type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="Try Javascript" />
        </form>
      </div>
    )
  }
}
