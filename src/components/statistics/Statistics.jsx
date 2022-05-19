import React from "react";
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={styles.container}>
            <p className={styles.reviews}>Good: <span>{good}</span></p>
            <p className={styles.reviews}>Neutral: <span>{neutral}</span></p>
            <p className={styles.reviews}>Bad: <span>{bad}</span></p>
            <p className={styles.reviews}>Total: <span>{total}</span></p>
            <p className={styles.reviews}>Positive feedback: <span>{positivePercentage}%</span></p>
        </div>
    )
};


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;