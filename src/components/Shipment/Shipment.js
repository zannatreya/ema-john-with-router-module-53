import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  //   const navigate = useNavigate();

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const shipping = { name, email, phone, address };
    console.log(shipping);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Info</h2>

        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>

          <input
            className="form-submit"
            type="submit"
            value="Add Shipping"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
