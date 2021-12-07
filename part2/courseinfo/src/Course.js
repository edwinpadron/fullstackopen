import React from 'react';

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course, index) => (
        <div key={index}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </div>
  );
};

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Total = ({ course }) => {
  const sum = course.parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);
  return <h3>Total of {sum} exercises</h3>;
};

const Part = props => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, index) => (
        <Part part={course.parts[index]} key={index} />
      ))}
    </div>
  );
};

export default Course;
