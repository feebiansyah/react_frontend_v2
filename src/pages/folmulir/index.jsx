import React from "react";
import { Link } from "react-router-dom";
import ModalFolmulir from "../../components/layout/ModalFormulir";
import { useState } from "react";
const FolmulirPage = () => {
  return (
    <>
      <h2>Daftar Folmulir</h2>
      <div className="row mt-3">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary w-25 mb-4"
            data-bs-toggle="modal"
            data-bs-target="#modalFolmulir"
          >
            Tambah Folmulir
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>NO</th>
              <th>Judul Formulir</th>
              <th>Slug</th>
              <th>Deskripsis</th>
              <th>Limit Respon</th>
              <th>Opsi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Judul Pertama</td>
              <td>judul-pertama</td>
              <td>Deskripsi judul pertama</td>
              <td>Ya</td>
              <td>
                <a href="" className="btn btn-sm btn-info text-light">
                  Detail
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Judul kedua</td>
              <td>judul-kedua</td>
              <td>Deskripsi judul kedua</td>
              <td>tidak</td>
              <td>
                <Link to="/" className="btn btn-sm btn-info text-light">
                  Detail
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/*Modal formulir  */}
      <ModalFolmulir></ModalFolmulir>
    </>
  );
};

export default FolmulirPage;
