import React from 'react';

export default class Card extends React.Component {
  render() {
    let post = this.props.post;

    return (
      <div className="card">
        <img src={post.user.profile_image_url} alt={post.user.name} />
        {post.text}
        {new Date(post.created_at).toLocaleTimeString()}
        <a href={`https://twitter.com/${post.user.screen_name}`} target="_blank">{`@${post.user.screen_name}`}</a>
      </div>
    )
  }
}
