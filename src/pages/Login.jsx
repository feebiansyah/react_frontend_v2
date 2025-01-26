import React, { useState } from "react";
import api from "../api/api";
import axios from "axios";

const Login = () => {
  // State data form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  // State error
  const [error, setError] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");
  const [invalidPassword, setInvalidPassword] = useState("");





  const handlerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setError("");
    const formData = {
      email: email,
      password: password,
    };
    const resetState = () => {
      setIsSubmit(false);
    };

    try {
      const response = await api.post("/auth/login", formData);
      localStorage.setItem("auth_token", response.data.user.accessToken);
      window.location.href = "/";
    } catch (err) {
      if(err.response.status === 422){
        setInvalidEmail(err.response.data.errors.email);
        setInvalidPassword(err.response.data.errors.password);
      }
      setError(err.response.data.message);
      console.log(err);
    } finally {
      resetState();
    }
  };
  return (
    <div className="row justify-content-center my-5">
      <div className="col-md-6">
        {error ? <div className="alert alert-danger">{error}</div> : ""}

        <form onSubmit={handlerSubmit}>
          <div className="card">
            <div className="card-header">
              <h2>Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group mb-2">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Masukan email.."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {invalidEmail ? <div className="invalid-feedback d-block">{invalidEmail}</div> : ""}
                
              </div>
              <div className="form-group mb-2">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Masukan password.."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {invalidPassword ? <div className="invalid-feedback d-block">{invalidPassword}</div> : ""}
              </div>
            </div>
            <div className="card-footer">
              <button
                type="submit"
                disabled={isSubmit}
                className="btn btn-success w-100"
              >
                {isSubmit ? "Sedang Login.." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
