import React from 'react';
import './Statistic.css';
import SingleStatistic from './SingleStatistic/SingleStatistic';

const Statistic = ({stat}) => {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
            {stat.map((el) => <SingleStatistic key={el.id} value={el}/>)}
            </ul>
        </section>
    );
};

export default Statistic;