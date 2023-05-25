import Rodal from "rodal";

import css from "./AddCardModal.module.css";
import "rodal/lib/rodal.css";
import { useState } from "react";

function AddCardModal({ visible, onClose, handleCardAdd }) {
  const customStyles = {
    background: "rgb(58 58 58)",
    padding: "20px",
    width: "50%",
    top: "-3rem",
    height: "fit-content",
    maxWidth: "40rem",
  };
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  return (
    <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
      <div className={css.container}>
        <div>
          <span className={css.label}>Card title</span>
          <input
            type="text"
            className={css.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <span className={css.label}>Detail</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={css.input}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>

        <button
          className={css.saveButton}
          disabled={title === "" && detail === ""}
          onClick={() => {
            handleCardAdd(title, detail);
            setDetail("");
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
    </Rodal>
  );
}


export default AddCardModal;
