import React, { useState } from 'react';

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={totalFeedback} />
          <StatisticLine
            text='average'
            value={(good * 1 + bad * -1) / totalFeedback}
          />
          <StatisticLine
            text='positive'
            value={((good / totalFeedback) * 100).toString() + ' %'}
          />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const displayStat = () => {
    if (good + neutral + bad) {
      return <Statistics good={good} neutral={neutral} bad={bad} />;
    } else {
      return <p>No feedback given</p>;
    }
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h2>statistics</h2>
      {displayStat()}
    </div>
  );
};

export default App;
