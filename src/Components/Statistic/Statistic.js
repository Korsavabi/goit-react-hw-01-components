import React from 'react';
import './Statistic.css';
import SingleStatistic from '../SingleStatistic/SingleStatistic';
import stats from '../../db/statistical-data.json';
const Statistic = () => {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
            {stats.map((stat) => <SingleStatistic key={stat.id} value={stat}/>)}
            </ul>
        </section>
    );
};

export default Statistic;