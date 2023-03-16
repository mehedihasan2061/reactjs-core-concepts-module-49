import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Data from '../Data/Data';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useState([]);
    const [cart, setCart] = useState([])
    // console.log(cart);
   
    
    useEffect(() => {
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    }, [])
    
    const handleDeleteBtn=(id) => {
        const cartPlayer = cart.filter(pd => pd.id !== id)
        setCart(cartPlayer)
        toast("Wow delete from cart!");
    }
    return (
        <div className='user-container'>
            <div className="container">
                {
                users.map(user=><Data user={user} key={user.id} cart={cart} setCart={setCart}></Data>)
            }
            </div>
            <div className="cart-container">
                <h2>Cart Summary</h2>
                
                {
                    cart.map(pd => <Cart pd={pd} key={pd.id} handleDeleteBtn={handleDeleteBtn} ></Cart>)
                }
                
            </div>
            
        </div>
    );
};

export default Home;