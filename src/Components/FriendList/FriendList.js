import React from 'react';
import './FriendList.css';
import PropTypes from 'prop-types';
import SingleFriend from './SingleFriend/SingleFriend';

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {/* <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве --> */}
            {friends.map((friend) => <SingleFriend key={friend.id} value={friend} />)}
        </ul>
    );
};

export default FriendList;

FriendList.propTypes ={
    id: PropTypes.number,
}