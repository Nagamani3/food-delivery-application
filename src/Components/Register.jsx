import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Createuser, GoogleLogin, GoogleProvider } from '../Redux/Action';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';



const Register = ({history}) => {
  let dispatch = useDispatch();
  
    
    let [state, setstate] = useState({
      email:"",
      password: "",
    phonenumber:"",
    address :"",
    });
    let { email, password,phonenumber,address } = state
    let handleChange = e => {
        let { name, value } = e.target;
        setstate({...state,[name]:value})
    }
    let handleSubmit = e => {
        e.preventDefault();
        try {
          dispatch(Createuser(email, password))
           toast.success(`verification mail for ${email} has be sent`);
        history.push("/login")
         
        } catch (error) {
          toast.error(error)
            
        }
  }
  let handleClick = async provider => {
    try {
      dispatch(GoogleLogin(provider))
    } catch (error) {
      toast.error(error)
    }
  }

  // let handleClick = async provider =>{
  //   try{
  //     dispatch( PhoneNumber (provider));
  //   }catch (error){
  //     toast.error(error)

  //   }
  // }
    return (
      <div style={{background:""}}>
         
        
        <h1 style={{ textAlign: "center", color:"red", marginBottom:"20px"}}>Sign up here </h1>
     

       <div id="line"></div>

        <div className=" container col-md-4">
          <form onSubmit={handleSubmit} className='color'>
          <div id="googleauthentication">
         
         
         <button onClick={()=>{
           handleClick(GoogleProvider);
         }}>
           <i class = "fab fa-google">&nbsp;&nbsp;</i>continue with google
         </button>
       </div>

       <div id="googleauthentication" style={{marginBottom:"40px"}}> 
       <Link to="/phone"> 
         <button onClick={()=>{
            // handleClick(PhoneNumber);
         }} style={{background:"#efefef",color:"black"}} >
          continue with phonenumber
         </button>
         </Link> 
       </div>
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
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phonenumber
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="phonenumber"
                value={phonenumber}
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
              className="btn "
        
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}

export default withRouter(Register)

  


