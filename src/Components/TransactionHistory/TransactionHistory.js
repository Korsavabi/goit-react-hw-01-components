import React from 'react';
import './TransactionHistory.css';
import SingleTransaction from './SingleTransaction/SingleTransaction';
const TransactionHistory = ({transactions}) => {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody >
                {transactions.map((obj) => <SingleTransaction key={obj.id} value={obj} />)}
            </tbody>
        </table>
    );
};

export default TransactionHistory;