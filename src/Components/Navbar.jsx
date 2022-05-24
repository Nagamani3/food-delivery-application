import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Component.css"


const Navbar = () => {
  let Bagval = useSelector(state=>state.AuthReducer.CartAdd)
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <div className='foodia'>
           <Link to ="/">Foodia</Link>
           </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active c"
                    aria-current="page"

                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                  signin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link">
                   <span className="badge badge-secondary">
                      
                      </span>Orders<sup id="badge" >{Bagval}</sup>
                  </Link>
                </li>
              
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
