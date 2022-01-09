import PropTypes from 'prop-types';
import style from './Friends.module.css';

export default function FriendListItem ({status, avatar, name}) {
    return (
        <>
          <span className = {style.status} style = {status ? { backgroundColor: "green" } : { backgroundColor: "red" }}></span>
          <img className = {style.avatar} src= {avatar} alt="" width = "48"/>
          <p className = {style.name}>{name}</p>
        </>
    );
}

FriendListItem.propType ={
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}