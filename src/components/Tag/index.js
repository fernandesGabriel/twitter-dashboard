import React from 'react';

// styles
import './tag.scss';

export default class Tag extends React.Component {
  render() {
    let text = this.props.text;
    let href = this.props.href;

    let isClickable = Boolean(this.props.href);

    let tagClass = 'tag';
    if (isClickable) {
      tagClass += ' tag--clickable';
    }

    return (
      <span className={tagClass}>
        {
          isClickable
            ? <TagClickable text={text} href={href} />
            : <TagText text={text} />
        }
      </span>
    )
  }
}

class TagClickable extends React.Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel='noopener noreferrer'>
        <TagText text={this.props.text} />
      </a>
    )
  }
}

class TagText extends React.Component {
  render() {
    return (
      this.props.text
    )
  }
}