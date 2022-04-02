import React from "react";

const Feedback = ({options, onLeaveFeedback }) => {
    return (
        <div>
            <button type="button" name="good" onClick={this.count}>Good</button>
            <button type="button" name="neutral" onClick={this.count}>Neutral</button>
            <button type="button" name="bad" onClick={this.count}>Bad</button>
        </div>
    )
};

export default Feedback;