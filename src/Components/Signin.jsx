import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../Redux/Action';
import { withRouter } from 'react-router-dom';
import {Link} from "react-router-dom"


const Signin = ({history}) => {
    
        let dispatch = useDispatch();
  
    
    let [state, setstate] = useState({
      email:"",
      password: "",
    });
    let { email, password } = state
    let handleChange = e => {
        let { name, value } = e.target;
        setstate({...state,[name]:value})
    }
    let handleSubmit = e => {
        e.preventDefault();
        try {
          dispatch(login(email,password))
          toast.success("successfully logged in")
          history.push("/")
        
         
        } catch (error) {
          toast.error(error)
            
        }
    }
    return (
      <div>
         
         
        <h1 style={{ textAlign: "center", color: "red" }}>Login here </h1>
        <div className=" container col-md-4">
          <form onSubmit={handleSubmit} className='color'>
            <div className="mb-1">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
           
            


            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-danger"
          
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}
    


export default withRouter(Signin)
