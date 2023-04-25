import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    const userStates = [
        {
            label: 'Followers',
            quantity: stats.followers
        },
         {
            label: 'Views',
            quantity: stats.views
        },
          {
            label: 'Likes',
            quantity: stats.likes
        }
    ];
    return (
<div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    {userStates.map(({ label, quantity })  =>
    <li key={label}>
                        
    <span className={css.label}>{label}</span>
    <span className={css.quantity}>{quantity}</span>
    </li>)}
  </ul>
</div>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({ followers:PropTypes.number, views:PropTypes.number,likes:PropTypes.number}),
}