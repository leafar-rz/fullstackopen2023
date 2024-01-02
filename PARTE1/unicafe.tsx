import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = (props:{ good:any; neutral:any; bad:any }) => {
  const totalFeedback = props.good + props.neutral + props.bad;

  if (totalFeedback === 0) {
    return <p>No feedback given</p>;
  }

  const averageScore = (props.good - props.bad) / totalFeedback || 0;
  const positivePercentage = (props.good / totalFeedback) * 100 || 0;

  return (
    <div>

    <table>
    <tbody>
      <tr>
        <td><h2>statistics</h2></td>
      </tr>
      <tr>
        <td>
        <StatisticLine text="good" value={props.good} />
        </td>
      </tr>

      <tr>
        <td>
        <StatisticLine text="good" value={props.good} />
        </td>
      </tr>

      <tr>
        <td>
        <StatisticLine text="neutral" value={props.neutral} />
        </td>
      </tr>

      <tr>
        <td>
        <StatisticLine text="bad" value={props.bad} />
        </td>
      </tr>

      <tr>
        <td>
        <StatisticLine text="Total feedback" value={totalFeedback} />
        </td>
      </tr>

      <tr>
        <td>
        <StatisticLine text="Average score" value={averageScore.toFixed(2)} />
        </td>
      </tr>

      <tr>
        <td>
        <StatisticLine text="Positive feedback" value={`${positivePercentage.toFixed(2)}%`} />
        </td>
      </tr>

      </tbody>
    </table>

      
     
      
      
     
      
     
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const totalFeedback = good + neutral + bad;

 

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}



export default App