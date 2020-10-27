import React from 'react';
import './User.css';
import SingleUser from '../SingleUser/SingleUser';
const User = ({users}) => {

    return (
        
        <div className="profile">
             <div className="description">
                <img src={users.avatar} alt="user avatar" className="avatar" />
                <p className="name">{users.name}</p>
                <p className="tag">@{users.tag}</p>
                <p className="location">{users.location}</p>
            </div>
            <ul className="stats">
            {Object.entries(users.stats).map(stat => <SingleUser key={stat} stat={stat} />)}
            </ul>
        </div>
    );
};

export default User;