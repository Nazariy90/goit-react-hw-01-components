import PropTypes from 'prop-types';
import "./FriendList.css";

export function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className="item">
          <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
          <img className="avatar" src={avatar} alt={`${name} avatar`} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};




