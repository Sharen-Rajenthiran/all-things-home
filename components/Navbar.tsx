
export default function Navbar() {
    return (
        <header className="fixed top-0 w-full bg-sky-950/40 backdrop-blur-lg z-50 border-b border-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo Section */}
                <div className="text-2xl font-serif font-bold text-white flex-1 text-left">
                    All Things Home
                </div>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8 flex-[2] justify-center">
                    <a href="#" className="hover:text-blue-600 transition">Home</a>
                    <a href="#products" className="hover:text-blue-600 transition">Products</a>
                    <a href="#howtoorder" className="hover:text-blue-600 transition">How to Order</a>
                    <a href="#orders" className="hover:text-blue-600 transition">Checkout</a>
                    <a href="#about" className="hover:text-blue-600 transition">About us</a>
                    <a href="#contact" className="hover:text-blue-600 transition">Contact Us</a>
                </nav>

                {/* Icons Section */}
                <div className="flex gap-6 items-center justify-end flex-1">
                    {/* Update Cart items count dynamically when cart functionality is implemented */}
                    <span>Happy Shopping</span>
                </div>

            </div>
        </header>
    )
}