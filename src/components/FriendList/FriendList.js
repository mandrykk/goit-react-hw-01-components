import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import style from './Friends.module.css'

export default function FriendList({ friends }) {
    return (
        <ul className={style.friendsList}>
            {friends.map((friend) => 
            <li className = {style.friendsListItem} key = {friend.id}>
                <FriendListItem 
                status = {friend.isOnline}
                avatar = {friend.avatar}
                name = {friend.name}/>
            </li>)}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}