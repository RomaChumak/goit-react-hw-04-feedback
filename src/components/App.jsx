import { Component } from "react";
import { Layout } from "./Layout.styled";
import { Feedbacks } from "./feedbacksList/feedbacks";
import { StatesticSection } from "./feedbacksStatistics/feedbacksStatistics.styled";
import { Notification } from "./Notification/Notification";
import { StatisticList } from "./feedbacksStatistics/feedbacksStatisticsList";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  hendleClick = (optin) => {
    this.setState(pState => ({
        [optin]: pState[optin] +1,
    }))
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const {good, neutral, bad} = this.state
  return (    <Layout>
    <Feedbacks options={Object.keys(this.state)} onClick={this.hendleClick} />
    <StatesticSection >
       <h2>Statistics</h2>
          {this.countTotalFeedback() <= 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <StatisticList
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </StatesticSection>
  </Layout>
  )}
};
