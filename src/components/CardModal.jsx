// src/components/CartModal.jsx
import React from 'react';

const CartModal = ({ cartItems, toggleCart }) => {
    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
            onClick={toggleCart}
        >
            <div
                className="bg-white p-6 rounded-lg w-96 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4">Корзина</h2>
                {cartItems.length === 0 ? (
                    <p className="text-center">Кошик порожній</p>
                ) : (
                    <ul className="space-y-4">
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between">
                                <span>{item.name}</span>
                                <span>{item.price} грн</span>
                            </li>
                        ))}
                    </ul>
                )}
                <button
                    className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={toggleCart}
                >
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default CartModal;
