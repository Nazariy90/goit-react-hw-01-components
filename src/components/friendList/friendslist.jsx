import PropTypes from 'prop-types';
import css from "./FriendList.module.css";

export function FriendList({ friends }) {
  return (
    <ul className={css.statisticsContainer}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={css.item}>
          <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
          <img className={css.avatar} src={avatar} alt={`${name} avatar`} width="48" />
          <p className={css.name}>{name}</p>
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




