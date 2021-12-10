import React, { useState, useEffect } from 'react';
import AddForm from './components/AddForm';
import Searchbox from './components/SearchBox';
import ListNames from './components/ListNames';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data);
    });
  }, []);

  const addName = event => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };

    if (
      persons.find(
        person => person.name.toLowerCase() === newPerson.name.toLowerCase()
      )
    ) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
    }

    setNewName('');
    setNewNumber('');
  };

  const handleNewName = event => {
    setNewName(event.target.value);
  };

  const handleNewNumber = event => {
    setNewNumber(event.target.value);
  };

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons = persons.filter(person => {
    return person.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <Searchbox
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      <AddForm
        addName={addName}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <ListNames filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
