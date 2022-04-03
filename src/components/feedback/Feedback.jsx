import React from "react";

const Feedback = ({options}) => {
    return (
        <div>
            <button type="button" name="good" onClick={options}>Good</button>
            <button type="button" name="neutral" onClick={options}>Neutral</button>
            <button type="button" name="bad" onClick={options}>Bad</button>
        </div>
    )
};

export default Feedback;