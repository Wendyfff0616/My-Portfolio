import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0); // Tracks the current word index in the `toRotate` array
  const [isDeleting, setIsDeleting] = useState(false); // Tracks if the typing effect is currently deleting
  const toRotate = [
    "Computer Science Student",
    "Software Development Student",
    "UI/UX Design Lover",
  ];
  const [text, setText] = useState(''); // Tracks the current text being typed or deleted
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Controls typing speed, slightly randomized
  const period = 2000; // Pause duration after typing a full word

  useEffect(() => {
    let ticker = setInterval(() => {
      tick(); // Calls the `tick` function every `delta` milliseconds
    }, delta);

    return () => {
      clearInterval(ticker); // Cleanup: stops the interval when component unmounts or `text` changes
    };
  }, [text]); // Dependency array ensures `useEffect` runs whenever `text` changes

  const tick = () => {
    const i = loopNum % toRotate.length; // Cycles through the `toRotate` array
    const fullText = toRotate[i]; // The current word being typed or deleted

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) // Deletes one character at a time
      : fullText.substring(0, text.length + 1); // Adds one character at a time

    setText(updatedText); // Updates the `text` state with the new string

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2); // Speeds up when deleting
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true); // Start deleting when the full word is typed
      setDelta(period); // Pause briefly before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false); // Switch to typing the next word when the current one is fully deleted
      setLoopNum(loopNum + 1); // Move to the next word
      setDelta(300 - Math.random() * 100); // Reset typing speed
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">

          <Col xs={12} md={6} xl={7}>

            <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

              <span className="tagline">Welcome to my Portfolio</span>

              <h1>
                {`Hi, I'm Wendy, a `}
                <span className="wrap">{text}</span> {/* Display dynamic text */}
              </h1>

              <p>
                The Three C's of My Life: Cats🐈, Crafts🎨, and Computers💻. These
                three C's represent who I am: curious, creative, and constantly
                learning.
              </p>

              <button onClick={() => console.log("connect")}>
                Let's connect <ArrowRightCircle size={25} />
              </button>

            </div>}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" /> {/* Properly placed image */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
