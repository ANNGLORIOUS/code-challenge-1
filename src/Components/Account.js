import React, { useState, useEffect } from 'react';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function Account() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);

  useEffect(() => {
    const searchQuery = transactions.filter(transaction => {
      return (
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    if (searchTerm === '') {
      setFilteredTransactions(transactions);
    } else {
      setFilteredTransactions(searchQuery);
    }
  }, [searchTerm, transactions]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <SearchBar handleChange={handleChange} />
      <TransactionForm filteredTransactions={filteredTransactions} />
    </div>
  );
}

export default Account;
