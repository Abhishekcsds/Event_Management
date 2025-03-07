import React from "react";
import "../styles/Feedback.css";

const Feedback = () => {
    return (
        <div className="review">
            <img src="/Photos/revphoto.png" alt="Feedback" />
            <div className="fb">
                <h2>Feedback</h2>
                <p>
                    “I wanted to drop you a line to say thank you for a FANTASTIC event.
                    We're thrilled with the day and everyone is talking about it today.”
                    <br /><br />
                    <strong>Abhishek</strong> <br />
                    *****
                </p>
            </div>
        </div>
    );
};

export default Feedback;
