import React from "react";
import styles from "./Feedback.module.css";

const Feedback = ({options}) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} type="button" name="good" onClick={options}>Good</button>
            <button className={styles.button} type="button" name="neutral" onClick={options}>Neutral</button>
            <button className={styles.button} type="button" name="bad" onClick={options}>Bad</button>
        </div>
    )
};

export default Feedback;