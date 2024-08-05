import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function Account() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);

  useEffect(() => {
    const searchQuery = transactions.filter(transaction => 
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredTransactions(searchTerm ? searchQuery : transactions);
  }, [searchTerm, transactions]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddTransaction = (event) => {
    event.preventDefault();
    const newTransactions = [...transactions, { ...newTransaction, id: transactions.length + 1 }];
    setTransactions(newTransactions);
    setFilteredTransactions(newTransactions);
    setNewTransaction({ date: '', description: '', category: '', amount: '' });
  };

  const handleDeleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  return (
    <div>
      <SearchBar handleChange={handleChange} />
      
      <form onSubmit={handleAddTransaction}>
        <input
          type="date"
          name="date"
          value={newTransaction.date}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          value={newTransaction.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="category"
          value={newTransaction.category}
          onChange={handleInputChange}
          placeholder="Category"
          required
        />
        <input
          type="number"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
          placeholder="Amount"
          required
        />
        <button type="submit">Add Transaction</button>
      </form>

      <TransactionForm 
        filteredTransactions={filteredTransactions} 
        onDeleteTransaction={handleDeleteTransaction} 
      />
    </div>
  );
}

export default Account;
