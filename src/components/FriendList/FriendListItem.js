import PropTypes from 'prop-types';

export default function FriendListItem ({status, avatar, name}) {
    return (
        <>
          <span class = "" style = {status ? { backgroundColor: "green" } : { backgroundColor: "red" }}></span>
          <img class = "" src= {avatar} alt="" width = "48"/>
          <p class="name">{name}</p>
        </>
    );
}

FriendListItem.propType ={
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}