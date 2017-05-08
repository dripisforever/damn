import React from 'react';
import { getAvatarUrl } from '../utils/helpers';
class SearchUserListItem extends React.Component {
  render() {
    return (
      <li>
        <a href={`/${this.props.user.username}`}>
          <div className="avatar-image" style={{backgroundImage: `url(${getAvatarUrl(avatarUrl)})`, backgroundSize: 'cover'}}></div>
          {/* <img width="35" className="avatar-image" src={getAvatarUrl(this.props.user.avatarUrl)} alt={`${this.props.user.username} avatar`} /> */}
          <span dangerouslySetInnerHTML={{ __html: this.props.user.username }} />
        </a>
      </li>
    );
  }
}
export default SearchUserListItem;
