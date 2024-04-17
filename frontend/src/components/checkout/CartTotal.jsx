import React, { useState, useEffect } from 'react';

const CartTotal = () => {
    const [reducedPrice, setReducedPrice] = useState(0);
    const [savings, setSavings] = useState(0);
    const [taxPrice, setTaxPrice] = useState(0);
    const taxRate = 0.08; // Assuming an 8% tax rate

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("shoppingCart")) || [];

        const transformedData = cartData.map((item) => ({
            price: item.price,
            discountedPrice: item.discountedPrice * item.cartQuantity,
        }));
        
        const totalOriginalPrice = transformedData.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);
        const totalDiscountedPrice = transformedData.reduce((sum, item) => sum + item.discountedPrice, 0);
        
        setReducedPrice(totalDiscountedPrice);
        setSavings(totalOriginalPrice - totalDiscountedPrice);
        setTaxPrice(totalDiscountedPrice * taxRate);
    }, []);

    return (
        <div>
            <h2>Cart Summary</h2>
            <div>Reduced Price: ${reducedPrice.toFixed(2)}</div>
            <div>Savings: ${savings.toFixed(2)}</div>
            <div>Tax (8%): ${taxPrice.toFixed(2)}</div>
            <div>Total: ${(reducedPrice + taxPrice).toFixed(2)}</div>
        </div>
    );
};

export default CartTotal;
