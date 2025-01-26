import React from "react";
import ModalPertanyaan from "../../components/layout/ModalPertanyaan";
import { Link } from "react-router-dom";

const DetailFolmulir = () => {
  return (
    <>
      <div className="card my-3">
        <div className="card-header">
          <h3>Detail Folmulir</h3>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <h4 className="card-title mb-2">
              Judul Folmulir : Biodata - Web tech members
            </h4>
            <p className="card-text">
              <strong>Deskripsi :</strong> to save tech web member
            </p>
            <p className="card-text">
              <strong>Slug :</strong> bodata
            </p>
            <p className="card-text">
              <strong>Limit Satu Response :</strong> Ya
            </p>
            <div className="d-flex justify-content-between">
              <p className="card-text mb-2  ">
                <strong>Domain Yang Diijinkan :</strong> webtech.id
              </p>
              <div className=" d-flex gap-2">
                <Link to={"/form"} className="btn mb-2 btn-sm btn-warning">&laquo;Kembali</Link>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modalPertanyaan"
                  className=" card-text mb-2 btn-sm btn btn-primary w-20"
                >
                  Buat Pertanyaan
                </button>
              </div>
            </div>
          </div>
          <hr />
          <h5>Pertanyaan</h5>
          <table className="table">
            <thead>
              <tr>
                <th>NO</th>
                <th>Judul Pertanyaan</th>
                <th>Tipe Pilihan</th>
                <th>Pilihan</th>
                <th>Wajib</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nama</td>
                <td>Short Answer</td>
                <td>-</td>
                <td>Ya</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Alamat</td>
                <td>Paragrapah</td>
                <td>-</td>
                <td>Tidak</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ModalPertanyaan></ModalPertanyaan>
    </>
  );
};

export default DetailFolmulir;
