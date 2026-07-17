// components/CarListing.tsx
'use client';

import { useState, useMemo } from 'react';
import { allCars, categories } from '@/data/cars';
import CarCard from './CarCard';

export default function CarListing() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Gunakan useMemo agar filter tidak dihitung ulang setiap render
  const filteredCars = useMemo(() => {
    return activeCategory === 'all'
      ? allCars
      : allCars.filter((car) => car.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="cars" className="py-16 px-4 md:px-8 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Model Hyundai
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
            {filteredCars.length} model tersedia
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-200 dark:border-zinc-700 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Mobil dengan animasi stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map((car, index) => (
            <CarCard key={car.slug} car={car} index={index} />
          ))}
        </div>

        {/* Jika tidak ada hasil */}
        {filteredCars.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400">
              Tidak ada model yang tersedia untuk kategori ini.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}