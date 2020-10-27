import React from 'react';
import './FriendList.css';
import SingleFriend from './../SingleFriend/SingleFriend';
import friends from './../../db/friends.json';

const FriendList = () => {
    return (
        <ul className="friend-list">
            {/* <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве --> */}
            {friends.map((friend) => <SingleFriend key={friend.id} value={friend} />)}
        </ul>
    );
};

export default FriendList;