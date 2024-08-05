import React from 'react';

function TransactionTable({ date, description, category, amount }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{parseFloat(amount).toFixed(2)}</td> 
    </tr>
  );
}

export default TransactionTable;
