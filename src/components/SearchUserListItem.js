import React from 'react';
class SearchUserListItem extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.user.url}>
          <img width="35" className="avatar-image" src={this.props.user.avatar_url} alt={`${this.props.user.username} avatar`} />
          <span dangerouslySetInnerHTML={{ __html: this.props.user.username }} />
        </a>
      </li>
    );
  }
}
export default SearchUserListItem;
