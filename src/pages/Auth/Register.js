import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-4">
            <form onSubmit={handleSubmit} className="auth-form p-4 bg-white rounded">
              <h2 className="text-center mb-5">Register</h2>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Name"
                  required
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Phone"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Address"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary text-white w-100">
                REGISTER
              </button>
              <div className="text-center mt-3">
                <p>
                  Already a user? <NavLink to={"/login"}>Login here.</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
