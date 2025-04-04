import React from "react";
import "./Products.css";
import { appContext } from "../App";
import { useContext } from "react";
export default function Products() {
  const { user,cart,setCart,products } = useContext(appContext);
  const addToCart = (id) => {
    setCart({...cart,[id]: 1})    
  }

  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };

  const decrement = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
  };
  return(
  <>
  <h3>{user.name}</h3>
    <div className="App-Products-Row">
      {products.map((value, index) => (
        <div key={index} className="App-Products-Box">
          <img src={value.url}></img>
          <h3>{value.name}</h3>
          <h4>{value.price}</h4>
          {cart[value.id] > 0 ? (
            <div>
              <button onClick={() => decrement(value.id)}>-</button>
              {cart[value.id]}
              <button onClick={() => increment(value.id)}>+</button>
            </div>
          ) : (
            <div>
              <button onClick={() => addToCart(value.id)}>Add to cart</button>
            </div>
          )
          }
        </div>
      ))}
    </div>
  </>
  )
}