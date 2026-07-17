// app/components/CarCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Car } from './data/cars';
import { useState } from 'react';

interface CarCardProps {
  car: Car;
  index: number;
}

export default function CarCard({ car, index }: CarCardProps) {
  const [imgSrc, setImgSrc] = useState(car.image);

  return (
    <div
      className="group bg-gray-50 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative h-52 w-full bg-gray-200 dark:bg-zinc-700 overflow-hidden">
        <Image
          src={imgSrc}
          alt={car.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
          onError={() => setImgSrc('/images/placeholder-car.jpg')}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {car.year}
        </span>
        {car.isNew && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">
            New
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-3 px-4">
          <span className="text-white text-xs font-medium uppercase tracking-wider">
            {car.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-black dark:text-white mb-1 line-clamp-1">
          {car.name}
        </h3>
        <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          {car.priceRange}
        </p>

        <div className="flex gap-2">
          <Link
            href={`/cars/${car.slug}`}
            className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition duration-300"
          >
            DETAIL
          </Link>
          <button className="flex-1 px-4 py-2 bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 text-black dark:text-white text-sm font-medium rounded-lg transition duration-300">
            GET QUOTE
          </button>
        </div>
      </div>
    </div>
  );
}