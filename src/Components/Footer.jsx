import React from 'react'
import "./Component.css"

const Footer = () => {
    return (
   
      <footer className="page-footer font-small special-color-dark pt-4">
        {/* Footer Elements */}
        <div className="container">
          {/* Social buttons */}
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-gplus mx-1">
                <i className="fab fa-google-plus-g"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1">
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-dribbble mx-1">
                <i className="fab fa-dribbble"> </i>
              </a>
            </li>
          </ul>
          {/* Social buttons */}
        </div>
        {/* Footer Elements */}
        {/* Copyright */}
       
        {/* Copyright */}
        <div id ="footercontent">
            <div id="margin"></div>
            <p id="about"> About us</p>
            <p>
            Everything began in 1946 when the proprietor opened his first espresso and doughnut and sandwich shop. It was gigantically fruitful and this drove him to begin another shop called organization name. He opened the principal store in 1950 in Massachusetts in the USA.

Today, ‘Organization Name’ can be found in 30 nations worldwide in excess of 10,000 areas. It has turned into the world’s driving’ Coffee and Baked Goods chain, serving in excess of 900 million doughnuts and 1.5 some espresso a year all-inclusive. Furthermore, presently it’s additionally in ____.
            </p>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://Foodia.com/" > Foodia.com</a>
        </div>
        </div>
      </footer>
    
    
       
    );
  }


export default Footer
