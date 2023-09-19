function Modal({ onClick }) {
  return (
    <div className="modal">
      <h1>Are you sure ?</h1>
      <button className="btn" onClick={onClick}>
        Yes
      </button>
      <button className="btn--alt" onClick={onClick}>
        Cancel
      </button>
    </div>
  );
}

export default Modal;
