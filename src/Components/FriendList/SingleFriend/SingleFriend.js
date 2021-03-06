import React from 'react';
import './SingleFriend.css';
import PropTypes from 'prop-types';

const SingleFriend = ({ value }) => {
    return (
        <li className="friend-list-item">
            <span className={value.isOnline ? 'status' : 'status-false'}></span>
            <img className="friend-list-item-avatar" src={value.avatar} alt="" width="48" />
            <p className="name">{value.name}</p>
        </li>
    );
};

export default SingleFriend;

SingleFriend.propTypes = {
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    name: PropTypes.string,
  };