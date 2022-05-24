import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        let type = isOnline ? 'active' : 'offline';
        return (
          <li className={s.item} key={id}>
            <span className={s[type]}>{isOnline}</span>
            <img
              className={s.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendsList;
