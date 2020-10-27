import React from 'react';
import './TransactionHistory.css';
import transactions from '../../db/transactions.json';
import SingleTransaction from '../SingleTransaction/SingleTransaction';
const TransactionHistory = () => {
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
                {transactions.map((transaction) => <SingleTransaction key={transaction.id} value={transaction} />)}
            </tbody>
        </table>
    );
};

export default TransactionHistory;