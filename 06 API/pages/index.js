import { useRef, useState } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorFeedback, setErrorFeedback] = useState(null);

  const [feedbackItems, setFeedbackItems] = useState([]);

  function submitFormHandler(e) {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    if (!enteredEmail) {
      setErrorEmail("Please provide an email");
    } else {
      setErrorEmail(null);
    }

    if (!enteredFeedback) {
      setErrorFeedback("Please provide a feedback");
    } else {
      setErrorFeedback(null);
    }

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then(res => res.json())
      .then(data => {
        setFeedbackItems(data.feedback);
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
          {errorEmail && <p>{errorEmail}</p>}
        </div>

        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
          {errorFeedback && <p>{errorFeedback}</p>}
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load feedback</button>
      <ul>
        {feedbackItems.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
