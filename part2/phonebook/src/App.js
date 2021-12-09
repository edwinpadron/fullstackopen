import React, { useState } from 'react';
import AddForm from './AddForm';
import Searchbox from './SearchBox';
import ListNames from './ListNames';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
