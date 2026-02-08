import Image from "next/image";

const base = "/all-things-home";

export default function About() {
    return (
        <section id="about" className="py-16 px-6 md:px-12 bg-gradient-to-r from-[#358E97] to-[#003067]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Image */}
                <div className="relative h-[500px] w-full">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <Image
                            src={"/logo/all-things-home-removebg.png"}
                            alt="shop-logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="space-y-6">
                    <h1 className="uppercase tracking-widest text-sm text-white">Our Story</h1>
                    <p className="text-white leading-relaxed">
                        Welcome to our shop! 👗✨
                        We offer stylish, comfortable, and affordable clothing for
                        everyday wear and special occasions.
                        Our collection is carefully selected to help you look confident and
                        on-trend without breaking the bank.
                        We are a small family just starting out as Shopee sellers, and this is our first time selling clothes.
                        We truly appreciate your support 💕
                    </p>
                </div>
            </div>
        </section>
    );
}