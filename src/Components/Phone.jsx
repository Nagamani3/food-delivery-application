import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PhoneNumber } from "./../Redux/Action/index";
import { toast } from "react-toastify";

const Phone = ({history}) => {
  
  let dispatch = useDispatch();
  let [state, setState] = useState({
      phone: "",
     
  });
  let {phone } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      dispatch(PhoneNumber(PhoneNumber));
      toast.success("successfully otp sent");
      history.push("/")
     
    } catch (err) {

    }
  };
  return (
    <div className="container col-md-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Phone number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div id="recaptcha-container"></div>
        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default withRouter(Phone);