import Image from "next/image";

const base = "/all-things-home";

export default function Hero() {
  return (
    <section className="relative h-[90vh] bg-[#2B5EA7] flex items-center px-6 md:px-24 pt-20">
      
      {/* Background Image */}
      <Image
        src={`${base}/hero/hero.png`}
        alt="Hero image"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <p className="uppercase tracking-widest text-sm mb-3">
            Casual Clothes
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Clothes for all <br /> Ages
          </h1>

          <a href="#products" className="inline-block bg-white text-blue-900 px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition">
            Discover Now
          </a>
        </div>
      </div>

    </section>
  );
}
