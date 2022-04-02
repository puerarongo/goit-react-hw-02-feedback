import React, { Component } from "react";
import Section from "./section/Section";


class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        percent: 0
    }

    count = e => {
      const { name } = e.currentTarget
      this.setState(prevState => {
          return {[name]: prevState[name] + 1}
      })

      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
    };

    countTotalFeedback = () => {
      this.setState(prevState => {
          return { total: prevState.good + prevState.neutral + prevState.bad }
      })
    };

    countPositiveFeedbackPercentage = () => {
      this.setState(prevState => {
          return {percent: Math.round(prevState.good / prevState.total * 100)}
      })
  }

  render() {
    return (
      <div>
        <Section title={"Please leave feedback"} />
        <Section title={"Statistics"} />
      </div>
    )
  }
}

export default App;