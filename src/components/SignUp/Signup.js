import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Register</h2>

        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>

          <input className="form-submit" type="submit" value="Register" />
        </form>
        <p>
          Already Have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
