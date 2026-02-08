"use client";
import { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductImageZoom from "./ProductImageZoom";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const { addToCart } = useCart();
    const [zoomImage, setZoomImage] = useState<string | null>(null);

    // 1. Local State for user selections
    const [qty, setQty] = useState(1);
    const [selectedSize, setSelectedSize] = useState(
        Array.isArray(product.size) ? product.size[0] : product.size
    );
    const [selectedDesign, setSelectedDesign] = useState(
        Array.isArray(product.design) ? product.design[0] : product.design
    );
    const [selectedColor, setSelectedColor] = useState(
        Array.isArray(product.color) ? product.color[0] : product.color
    );

    // 2. Logic to check if user is asking for more than we have
    const isOutOfStock = qty > (product.stock ?? 0);

    const handleAddToCart = () => {
        // Pass the selections as separate arguments to match our new context function
        addToCart(product, qty, selectedColor, selectedSize, selectedDesign);
    };

    return (
        <div className="flex flex-col bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">

            {/* Product Image Section */}
            <div className="relative h-96 bg-gray-50 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {/* If it's an array, map through it. If it's a single string, wrap it in an array to map it. */}
                {(Array.isArray(product.imageUrl) ? product.imageUrl : [product.imageUrl]).map((url, index) => (
                    <div key={index} className="relative flex-shrink-0 w-full h-full snap-center">
                        <img
                            src={url}
                            alt={`${product.name} - ${index}`}
                            className="w-full h-full object-contain cursor-zoom-in transition-transform duration-500 hover:scale-105"
                            onClick={() => setZoomImage(url)}
                        />
                    </div>
                ))}

                {/* Visual Hint: Only show dots if there's more than one image */}
                {Array.isArray(product.imageUrl) && product.imageUrl.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                        {product.imageUrl.map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50 shadow-sm" />
                        ))}
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-tight mb-1">
                    {product.name}
                </h3>
                <div className="min-h-[3.75rem] mb-4">
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {product.description}
                    </p>
                </div>


                {/* Options Selection Area */}
                <div className="space-y-4 mb-6">

                    {/* Size Selection (Buttons) */}
                    {product.size && (
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold text-black uppercase">Select Size</p>
                            <div className="flex flex-wrap gap-2 text-white">
                                {(Array.isArray(product.size) ? product.size : [product.size]).map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setSelectedSize(s)}
                                        className={`px-3 py-1 text-xs border transition ${selectedSize === s
                                            ? "border-blue-600 bg-blue-50 text-blue-600 font-bold"
                                            : "border-black text-gray-600 hover:border-gray-400"
                                            }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Design Selection (Dropdown) */}
                    {product.design && (
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold text-gray-400 uppercase">Select Design</p>
                            <select
                                onChange={(e) => setSelectedDesign(e.target.value)}
                                className="w-full border border-black p-2 text-xs outline-none focus:border-blue-500 text-black"
                            >
                                {(Array.isArray(product.design) ? product.design : [product.design]).map((d) => (
                                    <option key={d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Color Selection Dropdown (if applicable) */}
                    {product.color && (
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold text-black uppercase">Select Color</p>
                            <select
                                onChange={(e) => setSelectedColor(e.target.value)}
                                className="w-full border border-black p-2 text-xs outline-none focus:border-blue-500 text-black"
                            >
                                {(Array.isArray(product.color) ? product.color : [product.color]).map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Quantity & Stock Logic */}
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-black">
                            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-1 bg-black border-r">-</button>
                            <span className="px-4 text-sm font-bold text-black">{qty}</span>
                            <button onClick={() => setQty(qty + 1)} className="px-3 py-1 bg-black border-l">+</button>
                        </div>
                        {isOutOfStock && (
                            <span className="text-red-600 text-[10px] font-bold animate-pulse">
                                Exceeds Stock!
                            </span>
                        )}
                    </div>
                </div>

                {/* Bottom Price and CTA */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xs text-black font-medium">Unit Price</span>
                        <span className="text-lg font-bold text-blue-900">RM{product.price}</span>
                    </div>

                    <button
                        disabled={isOutOfStock}
                        onClick={handleAddToCart}
                        className={`w-full py-3 text-xs font-bold uppercase tracking-widest transition-all
              ${isOutOfStock
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-[#2B5EA7] text-white hover:bg-blue-800 shadow-md active:scale-95"
                            }`}
                    >
                        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
                    </button>
                </div>
            </div>
            {zoomImage && (
                <ProductImageZoom
                    src={zoomImage}
                    alt={product.name}
                    onClose={() => setZoomImage(null)}
                />
            )}
        </div>
    );
}