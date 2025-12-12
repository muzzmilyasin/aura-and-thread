import { useState, useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartModal() {
    const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsCartOpen(false);
            setIsClosing(false);
        }, 300); // Match animation duration
    };

    // Reset closing state when cart opens
    useEffect(() => {
        if (isCartOpen) {
            setIsClosing(false);
        }
    }, [isCartOpen]);

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
                onClick={handleClose}
            />

            {/* Cart Panel */}
            <div className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-background z-50 shadow-2xl flex flex-col ${isClosing ? 'animate-slide-out' : 'animate-slide-in'}`}>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-serif text-primary">Shopping Cart</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                            <ShoppingBag className="h-16 w-16 text-gray-300" />
                            <p className="text-gray-500">Your cart is empty</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100">
                                    <div className="w-20 h-20 bg-gray-100 flex-shrink-0 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-medium text-sm text-primary">{item.name}</h3>
                                            <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center border border-gray-200">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-1 hover:bg-gray-50 transition-colors"
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </button>
                                                <span className="px-3 text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-1 hover:bg-gray-50 transition-colors"
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </button>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <p className="font-medium text-sm">{item.price}</p>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <X className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="border-t border-gray-200 p-6 space-y-4">
                        <div className="flex justify-between items-center text-lg font-serif">
                            <span>Total</span>
                            <span className="text-primary">${cartTotal.toFixed(2)}</span>
                        </div>

                        <button className="w-full bg-primary text-white py-3 text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors">
                            Checkout
                        </button>

                        <button
                            onClick={clearCart}
                            className="w-full text-sm text-gray-500 hover:text-primary transition-colors"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
