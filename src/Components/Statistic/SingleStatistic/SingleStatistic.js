import React from 'react';
import './SingleStatistic.css';
import PropTypes from 'prop-types';


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

SingleStatistic.propTypes ={
    label: PropTypes.string,
    percentage: PropTypes.number
}