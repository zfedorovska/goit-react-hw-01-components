import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

function FriendsList({ friends }) {
    return (
        <ul>
            {friends.map(item => {
                let type = item.isOnline ? "active" : "offline";
                return (<li className={s.item} key={item.id}>
                    <span className={s[type]}>{item.isOnline}</span>
                    <img className={s.avatar} src={item.avatar} alt="User avatar" width="48" />
                    <p className={s.name}>{item.name}</p>
                </li>
                )
            })}
        </ul>
        );
}
 
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FriendsList;