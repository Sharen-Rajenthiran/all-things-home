"use client";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  onClose: () => void;
};

export default function ProductImageZoom({ src, alt, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold z-10"
        >
          ✕
        </button>

        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>
    </div>
  );
}
