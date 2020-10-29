import React from 'react';
import './SingleTransaction.css';
import PropTypes from 'prop-types';


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
SingleTransaction.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  };