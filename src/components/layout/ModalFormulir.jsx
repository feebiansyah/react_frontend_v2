import { all } from "axios";
import React, { useState, useEffect } from "react";
import api from "../../api/api";

const ModalFolmulir = (props) => {
  const { onSubmit, errorMessage, setErrorMessage } = props;
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [allowedDomains, setAllowedDomains] = useState("");
  const [description, setDescription] = useState("");
  const [limitOneResponse, setLimitOneResponse] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);



  const handlerSubmitFolmulir = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const requestDataFolmulir = {
      name: name,
      slug: slug,
      allowed_domains: allowedDomains.split(","),
      description: description,
      limit_one_response: limitOneResponse,
    };
    console.log(errorMessage);

    try {
      await onSubmit(requestDataFolmulir); // Call API
      setIsSubmit(false); 
    } catch (error) {
      setIsSubmit(false); // Tetap reset jika gagal
      console.error("Submit error:", error);
    }
  };

  return (
    <>
      <div className="modal fade" id="modalFolmulir">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Buat Folmulir
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handlerSubmitFolmulir}>
              <div className="modal-body">
                <div className="form-group mb-2">
                  <label htmlFor="name" className="form-label">
                    Judul Folmulir :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Masukan judul folmulir..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {/* show error message */}
                  {errorMessage?.name?.[0] && (
          <div className="invalid-feedback d-block">{errorMessage.name[0]}</div>
        )}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="slug" className="form-label">
                    Slug:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="slug"
                    name="slug"
                    value={slug}
                    placeholder="Masukan slug folmulir..."
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="allowed_domains" className="form-label">
                    Domain (Pisahkan dengan koma)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="allowed_domains"
                    name="allowed_domains"
                    placeholder="Masukan domain..."
                    value={allowedDomains}
                    onChange={(e) => setAllowedDomains(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="description" className="form-label">
                    Deskripsi:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={description}
                    placeholder="Masukan description folmulir..."
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="form-group mb-2 form-check d-flex gap-2 mt-2">
                  <input
                    type="checkbox"
                    id="limitOneResponse"
                    className="form-check-input ml-3"
                    checked={limitOneResponse}
                    onChange={(e) => setLimitOneResponse(e.target.checked)}
                  />
                  <label
                    htmlFor="limirOneResponse"
                    className="form-check-label"
                  >
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
                <button
                  type="submit"
                  disabled={isSubmit}
                  className="btn btn-success"
                >
                  {isSubmit ? "Mengirim" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalFolmulir;
