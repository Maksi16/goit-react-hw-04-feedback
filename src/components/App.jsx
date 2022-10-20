import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeetbackOptions } from './FeetbackOptions/FeetbackOptions';
import { Section } from './Sections/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.values(['good', 'neutral', 'bad']);
  //console.log(options);
  const onLeaveFeedback = event => {
    const key = event.target.name;

    //    console.log(key);
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section titel={'Please leave feedback'}>
        <FeetbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {countTotalFeedback() !== 0 ? (
        <Section titel={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
