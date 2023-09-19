import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [show, setShow] = useState();

  function handleShowModal() {
    setShow(true);
  }

  function handleHideModal() {
    setShow(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleShowModal}>
          Delete
        </button>
        {show && <Modal onClick={handleHideModal} />}
        {show && <Backdrop />}
      </div>
    </div>
  );
}

export default Todo;
