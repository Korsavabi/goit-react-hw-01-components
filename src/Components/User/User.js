import React from 'react';
import './User.css';
import PropTypes from 'prop-types';


const User = ({ stat:[key,value] }) => {
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

export default User;

User.propTypes ={
    key: PropTypes.string,
    value: PropTypes.number
}