import { Component, useState } from "react";
import { Layout } from "./Layout.styled";
import { Feedbacks } from "./feedbacksList/feedbacks";
import { StatesticSection } from "./feedbacksStatistics/feedbacksStatistics.styled";
import { Notification } from "./Notification/Notification";
import { StatisticList } from "./feedbacksStatistics/feedbacksStatisticsList";
export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedbacks;
  function hendleClick(feedbacks){
    setFeedbacks(pFeedbacks => {
    return { ...pFeedbacks,
        [feedbacks]: pFeedbacks[feedbacks] + 1,
      }
    }
    )
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  };

  function countPositiveFeedbackPercentage () {
    return Math.round((good * 100) / countTotalFeedback());
  }

    
  return (    <Layout>
    <Feedbacks options={Object.keys(feedbacks)} onClick={hendleClick} />
    <StatesticSection >
       <h2>Statistics</h2>
          {countTotalFeedback() <= 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <StatisticList
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              percentage={countPositiveFeedbackPercentage()}
            />
          )}
        </StatesticSection>
  </Layout>
  )}
