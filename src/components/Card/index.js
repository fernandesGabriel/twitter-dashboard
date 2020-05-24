import React from 'react';

// styles
import './card.scss';

export default class Card extends React.Component {
  render() {
    let post = this.props.post;

    return (
      <div className="card">

        <div className="card-icon">
          <img src={post.user.profile_image_url} alt={post.user.name} />
        </div>

        <div className="card-text">
          <p> {post.text} </p>
        </div>

        <div className="card-badges">
          <span className="card-badges-item"> {new Date(post.created_at).toLocaleTimeString()} </span>
          <a className="card-badges-item" href={`https://twitter.com/${post.user.screen_name}`} target="_blank" rel='noopener noreferrer'>
            @{post.user.screen_name}
          </a>
        </div>
      </div>
    )
  }
}
