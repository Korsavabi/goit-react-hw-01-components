import React from 'react';
import './Profile.css';
import User from './User/User';
import PropTypes from 'prop-types';
const Profile = ({users}) => {

    return (
        
        <div className="profile">
             <div className="description">
                <img src={users.avatar} alt="user avatar" className="avatar" />
                <p className="name">{users.name}</p>
                <p className="tag">@{users.tag}</p>
                <p className="location">{users.location}</p>
            </div>
            <ul className="stats">
            {Object.entries(users.stats).map(stat => <User key={stat} stat={stat} />)}
            </ul>
        </div>
    );
};

export default Profile;

Profile.propTypes ={
    users: PropTypes.string
}