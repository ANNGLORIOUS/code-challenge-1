import React from 'react';
import TransactionTable from './TransactionTable';

function TransactionForm({ filteredTransactions, onDeleteTransaction }) {
  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Actions</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredTransactions.map(transaction => (
          <TransactionTable 
            key={transaction.id} 
            {...transaction} 
            onDelete={() => onDeleteTransaction(transaction.id)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionForm;
