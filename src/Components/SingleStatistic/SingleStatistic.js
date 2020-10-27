import React from 'react';
import './SingleStatistic.css';

const SingleStatistic = ({value}) => {
    return (
        <>
                <li className="item">
                <span className="label">{value.label}</span>
                    <span className="percentage">{value.percentage} %</span>
                </li>
        </>
    );
};

export default SingleStatistic;