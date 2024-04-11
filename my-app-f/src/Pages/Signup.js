import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const createAccount = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        setError("Password do not match");
        return;
      }
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-box">
      <h2>Create Account</h2>
      {error && <p className="error">{error}</p>}
      <form>
        <div className="user-box hi">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>First Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Last Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label>Confirm Password</label>
        </div>
        <button onClick={createAccount}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
      <Link to="/" className="login-link">
        You already have an account? Login
      </Link>
    </div>
  );
}

export default Signup;
