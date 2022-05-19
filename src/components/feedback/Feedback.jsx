import React from "react";
import PropTypes from 'prop-types';
import styles from "./Feedback.module.css";

const Feedback = ({options, onLeaveFeedback}) => {
    return (
        <div className={styles.container}>
            {options.map((elem, i, arr) => { 
                return <button key={arr.indexOf(elem)} className={styles.button} type="button" name={elem} onClick={onLeaveFeedback}>{elem}</button>
            })} 
        </div>
    )
};

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

export default Feedback;