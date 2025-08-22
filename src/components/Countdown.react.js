import React, { useState, useEffect } from "react";

const CURRENT_SEASON = 1;
const EVENT_DATE = "Sep 5, 2025 07:00:00-07:00";

function getCurrentTime() {
    return new Date().getTime();
}

function Countdown() {
    const eventTime = new Date(EVENT_DATE).getTime();
    const [timeRemaining, setTimeRemaining] = useState(eventTime - getCurrentTime());
    const [content, setContent] = useState('');

    useEffect(() => {
      const countdownInterval = setInterval(() => {
        const currentTime = getCurrentTime();
        let difference = eventTime - currentTime;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (difference <= 0) {
          difference = 0;
          clearInterval(countdownInterval);
          setContent(`Season ${CURRENT_SEASON} is live!`);
          return null;
        }

        setContent(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        setTimeRemaining(difference);
      }, 1000);

      return () => clearInterval(countdownInterval);
  }, [timeRemaining, eventTime]);

    return (
        <section className="countdown-section text-center">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <p className="countdown">{content}</p>
                {timeRemaining > 0 ? <p>Until Season {CURRENT_SEASON} premiere</p> : null}
            </div>
        </section>
    );
}

export default Countdown;
