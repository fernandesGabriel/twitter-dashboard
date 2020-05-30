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
            ? <a href={href} target="_blank" rel='noopener noreferrer'> {text} </a> 
            : text
        }
      </span>
    )
  }
}
