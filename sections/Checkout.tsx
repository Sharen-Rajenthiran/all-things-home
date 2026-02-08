"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Orders() {
    const { cart, totalPrice, removeFromCart } = useCart();
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // This stops the page from refreshing

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");

        // Use \n for new lines here
        const orderList = cart.map(item =>
            `- ${item.name} (${item.selectedSize || 'N/A'}) x${item.quantity}`
        ).join('\n');

        const phoneNumber = "60136302527";

        // Create a clean string with standard new lines
        const message = `Hi All Things Home! I'd like to place an order:\n\nName: ${name}\nItems:\n${orderList}\n\nTotal: RM ${(totalPrice + 10).toFixed(2)}`;

        // Encode the WHOLE thing at once
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
        setShowSuccess(true);

        // Note: Use a function from your Context to clear the cart properly
        // cart.length = 0 usually doesn't trigger a re-render in React
    };

    return (
        <section id="orders" className="py-20 px-6 bg-white border-t">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* LEFT SIDE: Scrollable Item List */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold uppercase tracking-widest text-blue-900 border-b pb-4">
                        Review Your Order
                    </h2>

                    <div className="max-h-[500px] overflow-y-auto pr-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-200">
                        {cart.length === 0 ? (
                            <p className="text-gray-400 italic">No items added yet.</p>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className="flex gap-4 bg-gray-50 p-4 border border-gray-100">
                                    <div className="relative w-20 h-24 bg-white flex-shrink-0">
                                        <img
                                            src={Array.isArray(item.imageUrl) ? item.imageUrl[0] : item.imageUrl}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-sm font-bold leading-tight text-black">{item.name}</h4>
                                        {/* TRASH BIN BUTTON */}
                                        <button
                                            onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedDesign)}
                                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                            title="Remove item"
                                        >
                                            🗑️
                                        </button>
                                        <p className="text-[10px] text-gray-500 mt-1 uppercase">
                                            Size: {item.selectedSize || "N/A"} | Design: {item.selectedDesign || "Standard"}
                                        </p>
                                        <div className="flex justify-between items-end mt-4">
                                            <span className="text-xs font-medium text-black">Qty: {item.quantity}</span>
                                            <span className="font-bold text-blue-900">RM{(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                    </div>
                    <div className="bg-blue-900 text-white p-6 flex justify-between items-center">
                        <span className="uppercase text-sm font-bold tracking-widest">Total Amount (Shipping RM10) </span>
                        <span className="text-2xl font-black">RM {
                            cart.length === 0 ? "0.00" : (totalPrice + 10).toFixed(2)}</span>
                    </div>
                </div>

                {/* RIGHT SIDE: Checkout Form */}
                <div className="bg-gray-50 p-8 border border-gray-200">
                    <h3 className="text-xl font-bold mb-6 uppercase text-black">Delivery Details</h3>
                    <form onSubmit={handleSubmit} className="space-y-4 text-black">
                        <input name="name" placeholder="Full Name" className="w-full p-4 border bg-white focus:ring-2 focus:ring-blue-500 outline-none" required />
                        <input name="email" type="email" placeholder="Email Address" className="w-full p-4 border bg-white focus:ring-2 focus:ring-blue-500 outline-none" required />
                        <input name="phone" type="tel" placeholder="Phone Number" className="w-full p-4 border bg-white focus:ring-2 focus:ring-blue-500 outline-none" required />

                        <button
                            type="submit"
                            disabled={cart.length === 0}
                            className="w-full bg-blue-900 text-white py-5 font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors mt-6">
                            Place Order Now
                        </button>
                        <p className="text-[10px] text-center text-gray-400 mt-4 leading-relaxed">
                            We will contact you via WhatsApp to finalize payment <br /> and shipping details once the order is placed.
                        </p>
                    </form>
                </div>

            </div>
            {/* THANK YOU POPUP (MODAL) */}
            {showSuccess && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white max-w-md w-full p-8 text-center shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black"
                        >
                            ✕
                        </button>

                        <div className="text-6xl mb-4">✅</div>

                        <h2 className="text-2xl font-serif font-bold text-blue-900 mb-2">Order Placed!</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Thank you for shopping with All Things Home. We have received your request and redirected you to WhatsApp for payment verification.
                        </p>

                        <button
                            onClick={() => setShowSuccess(false)}
                            className="w-full border border-blue-900 text-blue-900 py-3 font-bold uppercase text-xs tracking-widest hover:bg-blue-50 transition"
                        >
                            Continue Browsing
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}