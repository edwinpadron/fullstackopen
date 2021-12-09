import React from 'react';

const ListNames = props => {
  return (
    <>
      <h2>Numbers</h2>
      {props.filteredPersons.map(person => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </>
  );
};

export default ListNames;
