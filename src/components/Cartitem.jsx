import React from "react";
function Cartitem({ cart }) {
  console.log(cart);
  return (
    <div className="cartblock">
      <div className="carrtheading">
        <h1>Cart Items</h1>
        <div className="cartbody">
          {cart.map((item, index) => (
            <div className="incart" key={index}>
              <img src={item.img} />
              <br></br>
              ID:{item.id}
              <br />
              Title:{item.title}
              <br />
              price : ${item.price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
