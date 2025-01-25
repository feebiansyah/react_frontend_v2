import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log("email" + email);
    console.log("password" + password);
  };
  return (
    <div className="row justify-content-center my-5">
      <div className="col-md-8">
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
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" disabled={isSubmit}  className="btn btn-success w-100">
                {isSubmit ? "Sedang Login.." : "Submit"}
              </button >
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
