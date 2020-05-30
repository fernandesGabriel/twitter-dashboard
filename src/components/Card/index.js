import React from 'react';

// components
import Tag from '../Tag';

// styles
import './card.scss';

export default class Card extends React.Component {
  render() {
    let post = this.props.post;

    return (
      <div className="card">

        <div className="card__icon">
          <img src={post.user.profile_image_url} alt={post.user.name} />
        </div>

        <div className="card__text">
          <p> {post.text} </p>
        </div>

        <div className="card__tags">
          <Tag text={new Date(post.created_at).toLocaleTimeString()}/>
          <Tag text={`@${post.user.screen_name}`} href={`https://twitter.com/${post.user.screen_name}`}/>
        </div>
      </div>
    )
  }
}
