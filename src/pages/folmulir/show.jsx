import React, { useEffect, useState } from "react";
import ModalPertanyaan from "../../components/layout/ModalPertanyaan";
import { Link, useParams } from "react-router-dom";
import api from "../../api/api";
import FolmulirPage from ".";

const DetailFolmulir = () => {
  const { slug } = useParams();
  const [formulirData, setFormulirData] = useState([]);

  const fecthData = async () => {
    try {
      const response = await api.get(`/forms/${slug}`);

      setFormulirData(response.data.form);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  useEffect(() => {
    fecthData();
    console.log(formulirData);
  }, [slug]);

  const handlerCreateQuestion = async (questionData) => {
    console.log(questionData);
    try {
      const response = await api.post(`/forms/${slug}/questions`, questionData);
      console.log(response);
      fecthData();
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  return (
    <>
      <div className="card my-3">
        <div className="card-header">
          <h3>Detail Folmulir</h3>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <h4 className="card-title mb-2">
              Judul Folmulir : {formulirData.name}
            </h4>
            <p className="card-text">
              <strong>Deskripsi :</strong> {formulirData.description}
            </p>
            <p className="card-text">
              <strong>Slug :</strong> {formulirData.slug}
            </p>
            <p className="card-text">
              <strong>Limit Satu Response :</strong>{" "}
              {formulirData === 1 ? "Ya" : "tidak"}
            </p>
            <div className="d-flex justify-content-between">
              <p className="card-text mb-2  ">
                <strong>Domain Yang Diijinkan :</strong>
                {formulirData?.allowed_domains?.length > 0 ? (
                  formulirData.allowed_domains.map((element, index) => (
                    <span className="d-inline gap-1" key={index}>
                      {element}
                      {index < formulirData.allowed_domains.length - 1 && ", "}
                    </span>
                  ))
                ) : (
                  <span>Tidak ada domain yang diizinkan</span>
                )}
              </p>
              <div className=" d-flex gap-2">
                <Link to={"/form"} className="btn mb-2 btn-sm btn-warning">
                  &laquo;Kembali
                </Link>
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
              {formulirData?.questions?.length > 0 &&
                formulirData.questions.flat().map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.choice_type}</td>
                      {/* <td>{item.choices !== null ? item.choices : "-"}</td> */}
                      <td>
                        {item.choices?.length > 0
                          ? item.choices.map((choice, index) => (
                              <span key={index}>
                                {choice}
                                {index < item.choices.length - 1 && ", "}
                              </span>
                            ))
                          : "-"}
                      </td>

                      <td>{item.is_required === 1 ? "Ya" : "Tidak"}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      <ModalPertanyaan onSubmit={handlerCreateQuestion}></ModalPertanyaan>
    </>
  );
};

export default DetailFolmulir;
