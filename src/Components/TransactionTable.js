import React from 'react';

function TransactionTable({ id, date, description, category, amount, onDelete }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{parseFloat(amount).toFixed(2)}</td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default TransactionTable;
