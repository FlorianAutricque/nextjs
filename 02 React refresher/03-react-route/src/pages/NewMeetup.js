// import { useEffect, useState } from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { useHistory } from "react-router-dom";

function NewMeetup() {
  const history = useHistory();
  function addMeetUpHandler(meetupData) {
    fetch(
      "https://react-starter-3f273-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  //using useEffect

  /*
  const [meetupData, setMeetupData] = useState(null);
  useEffect(() => {
    async function addMeetUpHandler(meetupData) {
      try {
        const response = await fetch(
          "https://react-starter-3f273-default-rtdb.firebaseio.com/meetups.json",
          {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error adding meetup");
        }

        history.replace("/");
      } catch (error) {
        console.error("Error adding meetup:", error);
      }
    }

    if (meetupData) {
      addMeetUpHandler(meetupData);
    }
  }, [meetupData, history]);

  function handledata(meetupData) {
    console.log(meetupData);
    setMeetupData(meetupData);
  } */

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetup;
