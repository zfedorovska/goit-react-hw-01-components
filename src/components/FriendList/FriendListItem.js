import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  let type = isOnline ? 'active' : 'offline';
  return (
    <li className={s.item}>
      <span className={s[type]}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
