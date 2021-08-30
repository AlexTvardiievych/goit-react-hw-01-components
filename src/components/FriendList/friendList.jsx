import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendLlist}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <li key={id}>
                    <div className={css.item}>
                        <span className={isOnline ? css.online : css.offline}></span>
                        <img className={css.avatar} src={avatar} alt={name} width="48" />
                        <p className={css.name}>{name}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};