'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen md:h-[90vh] overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hyundai/414x775 Banner KV Creta.avif" 
          alt="Hyundai Creta - Mobil terbaru"
          fill
          priority
          className="object-cover object-[center_30%] md:object-center" 
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//2Q=="
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Konten Teks */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg animate-fade-up">
          Drive the Future.
          <br />
          <span className="text-blue-400">Live the Innovation.</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-2xl drop-shadow-md animate-fade-up animation-delay-200">
          Temukan dunia baru berkendara bersama Hyundai. 
          Koleksi mobil terbaru dengan teknologi canggih dan desain futuristik.
        </p>

        {/* Hanya tombol "Lihat Semua Mobil" */}
        <div className="mt-8 animate-fade-up animation-delay-400">
          <Link
            href="#cars"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/50 inline-block"
          >
            Lihat Semua Mobil
          </Link>
        </div>
      </div>

      {/* Indikator scroll */}
      <div aria-hidden="true" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}