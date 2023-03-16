import React from 'react';
import './Cart.css'


const Cart = ({ pd, handleDeleteBtn }) => {
  console.log(pd);
   
  return (
    <div>
      <p>salary: {pd.salary}</p>
      <div className="cart-detail">
          <li>{pd.name}</li>
        <button
          onClick={() => handleDeleteBtn(pd.id)  }
          className="cart-detail-btn"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Cart;