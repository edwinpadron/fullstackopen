import React from 'react';

const Header = props => {
  return <h1>{props.course.name}</h1>;
};

const Part = props => {
  return (
    <div>
      <p>
        {props.part} {props.num}
      </p>
    </div>
  );
};

const Content = props => {
  return (
    <div>
      <Part part={props.parts[0].name} num={props.parts[0].exercises} />
      <Part part={props.parts[1].name} num={props.parts[1].exercises} />
      <Part part={props.parts[2].name} num={props.parts[2].exercises} />
    </div>
  );
};

const Total = props => {
  return (
    <p>
      Number of exercises{' '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  const parts = course.parts;

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
