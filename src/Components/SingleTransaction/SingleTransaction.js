import React from 'react';
import './SingleTransaction.css';

const SingleTransaction = ({ value }) => {
    return (
        <tr className='transaction-history-item'>
            <td>{value.type}</td>
            <td>{value.amount}</td>
            <td>{value.currency}</td>
        </tr>
    );
};

export default SingleTransaction;