import { useRef, useState } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorFeedback, setErrorFeedback] = useState(null);

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
    </div>
  );
}

export default HomePage;
