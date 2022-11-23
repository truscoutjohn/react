import React from 'react';
import moment from 'moment';

const formatter = new Intl.NumberFormat('en-GB');

const Transaction = props => {
  const [date, time] = moment(new Date(props.transaction.time)).format('DD MMM-HH:mm').split('-');

  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{time}</span>
      <span className="transaction__assets">
        {props.transaction.from}-{props.transaction.to}
      </span>
      <span className="transaction__rate">{props.transaction.rate}</span>
      <span className="transaction__amount">{formatter.format(props.transaction.amount)}</span>
    </li>
  );
};

export default Transaction;