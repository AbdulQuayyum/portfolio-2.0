import { useCallback, useEffect, useState } from 'react';
import Social from './Social';

// 1. Moved outside the component
const changingTexts = ["Frontend Engineer", "Backend Engineer", "Mobile Engineer", "Software Engineer"];

const Data = () => {
  const [loop, setLoop] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loop % changingTexts.length;
    let fullText = changingTexts[i];
    let updatedText = deleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (deleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setLoop(loop + 1);
      setDelta(500);
    }
  }, [deleting, loop, text, period]); // No longer complains about changingTexts

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker); };
  }, [text, delta, tick]);

  return (
    <div className="home-data ">
      <h1 className="home-title dark:text-[#fff]">
        Heyy
        {/* I am
        <br />
        Abdul-Quayyum */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home-hand"
        >
          {/* SVG paths omitted for brevity */}
          <path
            d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
            fill="#8C644D"
          ></path>
          <path
            d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
            fill="#BF9169"
          ></path>
          <path
            d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
            fill="#8C644D"
          ></path>
          <path
            d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
            fill="#BF9169"
          ></path>
          <path
            d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
            fill="#8C644D"
          ></path>
        </svg>
      </h1>
      <h3 className="home-subtitle dark:text-[#fff]">
        I'm Abdul-Quayyum, a {text}
      </h3>
      <p className="home-description dark:text-[#fff]">
        I like to think of myself as an Artist, Aesthete and a Software Engineer.
      </p>
      <Social />
    </div>
  );
}

export default Data;
