import React from "react";
//import styles from "./Section.module.css";

// todo Children
import Statistics from "components/statistics/Statistics";
import Feedback from "components/feedback/Feedback";

const Section = (title) => {
    return (
        <>
            <div>
                <h1>{title}</h1>
                <Feedback />
            </div>
            <div>
                <h2>{title}</h2>
                <Statistics />
            </div> 
        </>
    )
}

export default Section;