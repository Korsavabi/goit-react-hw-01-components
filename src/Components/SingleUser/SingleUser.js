import React from 'react';
import './SingleUser.css';

const SingleUser = ({ stat:[key,value] }) => {
    console.log();
    return (
        <>
            <li className="stats-item">
                <span className="label">{key}</span>
                <span className="quantity">{value}</span>
            </li>
        </>
    );
};

export default SingleUser;