import PropTypes from 'prop-types';
import style from './Profile.module.css'

export default function Profile ({avatar, username, tag, location, stats}) {
   return (<div className = {style.profile}>
        <div className = {style.description}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className = {style.avatar}
            />
            <p className = {style.name}>{username}</p>
            <p className = {style.tag}>{tag}</p>
            <p className = {style.location}>{location}</p>
        </div>

        <ul className = {style.stats}>
            <li className={style.statsItem}>
                <span className = {style.label}>Followers</span>
                <span className = {style.quantity}>{stats.followers}</span>
            </li>
            <li className={style.statsItem}>
                <span className = {style.label}>Views</span>
                <span className = {style.quantity}>{stats.views}</span>
            </li>
            <li className={style.statsItem}>
                <span className = {style.label}>Likes</span>
                <span className = {style.quantity}>{stats.likes}</span>
            </li>
        </ul>
   </div>
   )
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}