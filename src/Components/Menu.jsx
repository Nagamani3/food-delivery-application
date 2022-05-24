import React from "react";
import JSON from "./Food.json";
import {useDispatch} from "react-redux";
import { CartIncrement ,CartDecrement} from "../Redux/Action";
import "./menu.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

const PAGE_MYORDERS="foodi"
const PAGE_ORDER="order"
 


const Menu = () => {
let [order , setorder]=useState([]);
let [page,setPage] = useState(PAGE_MYORDERS)


// let Dispatch=useDispatch();
let {food} = JSON;
const [foodi] = useState([...food])

// let Cart=(a)=>{
// Dispatch(CartIncrement(a))
// }

const NavigateTo = (nextpage) =>{
  setPage(nextpage);
}

const addOrder = (e)=>{
  console.log("we are in orders")
  setorder([...order , e]);
}

const renderOrders=()=>(
  <div className="home">
     
  {foodi.map((e,idf)=>(
    <div className="card" style={{width: '18rem'}} key={idf}>
     <img className="card-img-top" src={e.image} alt={e.name} style={{width: '18rem',height:"200px"}} />
     <div className="card-body">
       <h5 className="card-title" style={{fontWeight:"bold"}}>{e.name}</h5>
       <p style={{fontWeight:"bold"}} className="card-text">{e.hotel}</p>
       <p className="card-text">{e.address}</p>
       <p className="card-text">{e.price}</p>
       <p className="card-text" ><span><i class="fas fa-star"></i></span>{e.ratings}</p>
       <p className="card-text3"><span><img src ="https://cdn.pixabay.com/photo/2016/06/06/06/14/limited-time-offer-1438906_960_720.png"
       />
       </span>{e.offers}</p>
       {/* <button  className="btn btn-danger" onClick={_=>(Cart(-1))}>-</button> */}
      {/* <Link to="/orders">  */}
       
       <button  className="btn btn-danger" onClick={()=>addOrder(e)}>Place Order</button>
       {/* </Link> */}
           
               {/* <button  className="btn btn-danger"onClick={_=>(Cart(1))}>+</button> */}
     </div>
   </div>
   
  ))}
  
 </div>

)
const renderFood=()=>(
  <>
  <h1>my orders</h1>
  <div className="home">
     
  {order.map((e,idf)=>(
    <div className="card" style={{width: '18rem'}} key={idf}>
     <img className="card-img-top" src={e.image} alt={e.name} style={{width: '18rem',height:"200px"}} />
     <div className="card-body">
       <h5 className="card-title" style={{fontWeight:"bold"}}>{e.name}</h5>
       <p style={{fontWeight:"bold"}} className="card-text">{e.hotel}</p>
       {/* <p className="card-text">{e.address}</p> */}
       <p className="card-text">{e.price}</p>
       {/* <p className="card-text" ><span><i class="fas fa-star"></i></span>{e.ratings}</p> */}
       {/* <p className="card-text3"><span><img src ="https://cdn.pixabay.com/photo/2016/06/06/06/14/limited-time-offer-1438906_960_720.png"
       />
       </span>{e.offers}</p> */}
       <button  className="btn btn-danger" onClick={_=>(Cart(-1))}>-</button>
      {/* <Link to="/orders">  */}
       
       {/* <button  className="btn btn-danger" onClick={addOrder}>Place Order</button> */}
       {/* </Link> */}
           
               <button  className="btn btn-danger"onClick={_=>(Cart(1))}>+</button>
     </div>    </div>
   
  ))}
  
 </div>
 </>
  
)

  return (
    <>
    <header>
    <button  onClick={()=> NavigateTo(PAGE_ORDER)}>Go to Orders ({order.length})</button>
  </header>
  {page === PAGE_MYORDERS && renderOrders()}
  {page === PAGE_ORDER && renderFood()}
    
   
    </>
   
    
  );
};

export default Menu;