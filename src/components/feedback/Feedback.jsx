import React, { Component } from "react";
import styles from "./Feedback.module.css";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        percent: 0
    }

    count = e => {
        console.log(e.currentTarget)
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
                <h1>Please leave feedback</h1>
                <div>
                    <button type="button" name="good" onClick={this.count}>Good</button>
                     <button type="button" name="neutral" onClick={this.count}>Neutral</button>
                     <button type="button" name="bad" onClick={this.count}>Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <p>Good: <span>{this.state.good}</span></p>
                    <p>Neutral: <span>{this.state.neutral}</span></p>
                    <p>Bad: <span>{this.state.bad}</span></p>
                    <p>Total: <span>{this.state.total}</span></p>
                    <p>Positive feedback: <span>{this.state.percent}%</span></p>
                </div>
            </div>
        )
    }
};


export default Feedback;