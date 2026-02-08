import Image from "next/image";

export default function Promotions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Promo */}
        <div className="relative h-96">
          <Image
            src="/products/clothes/1.jpg"
            alt="Where dreams meet couture"
            fill
            className="object-contain"
          />

          <div className="absolute inset-0 bg-black/20 rounded-lg" />

          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            <p className="uppercase text-xs tracking-widest mb-2">
              Simple and Comfort Design
            </p>
            <h3 className="text-2xl font-bold mb-4">
              Thick Clothing <br /> Premium Feel
            </h3>
            <a className="w-fit bg-white text-black px-4 py-2 text-sm" href="#products">
              Browse
            </a>
          </div>
        </div>

        {/* Right Promo */}
        <div className="relative h-96">
          <Image
            src="/products/clothes/10.jpg"
            alt="Enchanting styles for every woman"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20 rounded-lg" />

          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            <p className="uppercase text-xs tracking-widest mb-2">
              Simple and Plain
            </p>
            <h3 className="text-2xl font-bold mb-4">
              Perfect <br /> for Every Day Use
            </h3>
            <a className="w-fit bg-white text-black px-4 py-2 text-sm" href="#products">
              Browse
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
