import React, { useState, useEffect } from "react";

const EVENT_DATE = "Sep 5, 2025 07:00:00";

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
          setContent('We are live!');
          return null;
        }

        setContent(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        setTimeRemaining(difference);
      }, 1000);

      return () => clearInterval(countdownInterval);
  }, [timeRemaining]);

    // let content = '';

    //     const distance = countDownDate - now;


    //     // // Display the result in the element with id="demo"
    //     // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //     // + minutes + "m " + seconds + "s ";
    //     content = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    //     // If the count down is finished, write some text
    //     if (distance < 0) {
    //         // document.getElementById("demo").innerHTML = "EXPIRED";
    //         content = "LAUNCHED"
    //     }


    return (
        <section className="contact-section bg-black">
            <h2 className="link-header text-white mb-4">{content}</h2>
        </section>
    );
}

export default Countdown;
