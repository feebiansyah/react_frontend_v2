import { all } from "axios";
import React, { useState } from "react";

const ModalFolmulir = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [allowedDomains, setAllowedDomains] = useState("");
  const [description, setDescription] = useState("");
  const [limitOneResponse, setLimitOneResponse] = useState(false);
  const [response, setResponse] = useState("");

  const handlerSubmitFolmulir = () => {
    const requestDataFolmulir = {
      name: name,
      slug: slug,
      allowed_domains: allowedDomains,
      description: description,
      limit_one_response: limitOneResponse,
    };
    setResponse(requestDataFolmulir);
  };

 
  return (
    <div className="modal fade" id="modalFolmulir">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Modal title
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
                  Judul Folmulir:
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
                  Domain
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
              <div className="form-group mb-2">
                <label htmlFor="description" className="form-label">
                  Limit Response:
                </label>
                <br />
                <input
                  type="radio"
                  id="true"
                  name="true"
                  value="true"
                  className="mx-2"
                  checked={limitOneResponse === true}
                  onChange={() => setLimitOneResponse(true)}
                />
                <label htmlFor="true" className="form-label">
                  Ya
                </label>
                <input
                  type="radio"
                  id="false"
                  name="false"
                  value="false"
                  className="mx-2"
                  checked={limitOneResponse === false}
                  onChange={() => setLimitOneResponse(false)}
                />
                <label htmlFor="false" className="form-label">
                  Tidak
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalFolmulir;
