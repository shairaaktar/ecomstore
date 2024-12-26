// components/PlaceOrder.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import { toast } from "react-toastify";
import BASE_URL from "../config";

const PlaceOrder = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.userState);
    const cartState = useSelector((state) => state.cartState);

    const handlePlaceOrder = async () => {
        if (!user.token) {
            toast.error('Please log in to place an order.');
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}/api/create-order`, {
                items: cartState.cartItems,
                totalAmount: cartState.orderTotal,
            }, {
                headers: {
                    authtoken: user.token
                }
            });

            if (response.status === 201) {
                navigate(`/card-payment/${response.data.order._id}`);
            } else {
                throw new Error('Failed to place order.');
            }
        } catch (error) {
            toast.error('Failed to place order. Please try again later.');
        }
    };

    return (
        <div>
            <h1>Review Your Order</h1>
            {/* Display order details */}
            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
};

export default PlaceOrder;
