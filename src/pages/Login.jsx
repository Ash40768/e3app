import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [LoginId, setLoginId] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginId({
      ...LoginId,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (LoginId.email && LoginId.password) {
      login(LoginId.email, LoginId.password);
    }
  };
  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   margin: "auto",
        //   maxWidth: "200px",
        //   gap: "10px",
        // }}
      >
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={LoginId.email}
          onChange={handleChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={LoginId.password}
          onChange={handleChange}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
