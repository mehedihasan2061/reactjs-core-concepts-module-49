import React from 'react';
import Cart from '../Cart/Cart';
import './Data.css'

const Data = ({ user, cart, setCart }) => {
   
    
    const { id, name, salary, email } = user;
     const handleBtn = () => {
         const info = user;
         
         if (cart) {
             const newInfo = [...cart, info]
             setCart(newInfo)
         }
         else {
             setCart([info])
         }
     };
    return (
        <div className='single-container'>
            <p>id: {id}</p>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <h5>{salary}</h5>
            <button onClick={handleBtn}>Add To Cart</button>
            
        </div>
    );
};

export default Data;