import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalFolmulir from "../../components/layout/ModalFormulir";
import { useState } from "react";
import api from "../../api/api";
const FolmulirPage = () => {
  //navigate
  const navigate = useNavigate();

  //formulir data
  const [folmulirData, setFolmulirData] = useState([]);

  //loading
  const [isLoading, setIsLoading] = useState(true);

  //validation and errors
  const [error, setError] = useState(null);
  

  //fetch data get all from api
  const fecthData = async () => {
    try {
      const response = await api.get("/forms");
      setFolmulirData(response.data.forms);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  

  //handler post data from from api
  const handlerCreateFolulir = async (formData) => {
    try {
      const response = await api.post("/forms", formData);
      fecthData();
    } catch (err) {
      console.log(err);
     
    } finally {
    }
  };

  //handler show detail form from api
  const handlerShowFormDetail = (slug) => {
    navigate(`/form/${slug}`);
  }

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <>
      
      <h2>Daftar Folmulir</h2>
      <div className="row mt-3">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-sm btn-primary w-25 mb-4"
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
            {folmulirData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.slug}</td>
                <td>{item.description}</td>
                <td>{item.limit_one_response == 1 ? "Ya" : "Tidak"}</td>
                <td>
                  <button type="button"
                    onClick={() => handlerShowFormDetail(item.slug)}
                    className="btn btn-sm btn-info text-light"
                  >
                    Detail
                  </button >
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*Modal formulir  */}
      <ModalFolmulir onSubmit={handlerCreateFolulir}></ModalFolmulir>
    </>
  );
};

export default FolmulirPage;
