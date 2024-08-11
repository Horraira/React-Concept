import React from 'react'

interface CartProps {
    cartItems: string[],
    clearCart: () => void
}

const Cart = ({ cartItems, clearCart }: CartProps) => {
    return (
        <>
            <div>Cart</div>
            <ul>
                {cartItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <button onClick={clearCart} className="btn btn-danger">Clear</button>
        </>
    )
}

export default Cart