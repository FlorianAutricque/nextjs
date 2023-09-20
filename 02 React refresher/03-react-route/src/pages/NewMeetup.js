import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
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
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetup;
