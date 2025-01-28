import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModalPertanyaan = (props) => {
  const { onSubmit } = props;

  const [name, setName] = useState("");
  const [choiceType, setChoiceType] = useState("");
  const [choice, setChoice] = useState([]);
  const [newChoice, setNewChoice] = useState("");
  const [isRequired, setIsRequired] = useState(false);

  
  const handleAddChoice = () => {
    if (newChoice.trim() !== "") {
      setChoice([...choice, newChoice.trim()]);
      setNewChoice("");
    }
  };
  const handleRemoveChoice = (index) => {
    setChoice(choice.filter((_, i) => i !== index));
  };

  const questionsData = {
    name: name,
    choice_type : choiceType,
    choices: choice,
    is_required: isRequired,
  };

  const handlerSubmitQuestion = (e) => {
    e.preventDefault();

   
    onSubmit(questionsData);
  };

  return (
    <div className="modal fade" id="modalPertanyaan">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Buat Pertanyan
            </h1>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handlerSubmitQuestion}>
            <div className="modal-body">
              <div className="form-group mb-2">
                <label htmlFor="name" className="form-label">
                  Judul Pertannyaan :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Masukan judul pertanyaan..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="choiceType" className="form-label">
                  Jenis Pilihan :
                </label>
                <select
                  name="choiceType"
                  className="form-control form-select"
                  value={choiceType}
                  onChange={(e) => setChoiceType(e.target.value)}
                  id="choiceType"
                >
                  <option value="">Pilih Jenis Pilihan</option>
                  <option value="short answer">Short Answer</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="date">Date</option>
                  <option value="multiple choice">Multiple Choice</option>
                  <option value="dropdown">Dropdown</option>
                  <option value="checkbox">checkbox</option>
                </select>
              </div>
              {["multiple choice", "dropdown", "checkbox"].includes(
                choiceType
              ) && (
                <div className="form-group mb-2">
                  <label htmlFor="choice">Pilihan :</label>
                  <div className="d-flex mb-2 mt-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukan pilihan..."
                      value={newChoice}
                      onChange={(e) => setNewChoice(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-sm  w-25 btn-primary ms-2"
                      onClick={handleAddChoice}
                    >
                      +
                    </button>
                  </div>

                  <ul className="list-group">
                    {choice.map((choic, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between"
                      >
                        {choic}
                        <button
                          type="button"
                          className="btn btn-sm w-5 btn-danger"
                          onClick={() => handleRemoveChoice(index)}
                        >
                          -
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="form-group mb-2 form-check d-flex gap-2 mt-2">
                <input
                  type="checkbox"
                  id="isRequired"
                  className="form-check-input ml-3"
                  checked={isRequired}
                  onChange={(e) => setIsRequired(e.target.checked)}
                />
                <label htmlFor="isRequired" className="form-check-label">
                  Wajib
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Tutup
              </button>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPertanyaan;
