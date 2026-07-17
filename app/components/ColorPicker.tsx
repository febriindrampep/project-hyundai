// app/components/ColorPicker.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Color {
  name: string;
  hex: string;
  image?: string;
}

interface ColorPickerProps {
  colors: Color[];
  carName: string;
}

export default function ColorPicker({ colors, carName }: ColorPickerProps) {
  const [selectedColor, setSelectedColor] = useState(colors?.[0] || null);

  if (!colors || colors.length === 0) {
    return <p className="text-gray-500 text-sm">Data warna belum tersedia</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color.hex}
            onClick={() => setSelectedColor(color)}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 transition-all duration-300 ${
              selectedColor?.hex === color.hex
                ? 'border-blue-600 scale-110 shadow-lg'
                : 'border-gray-300 hover:scale-105'
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
            aria-label={`Warna ${color.name}`}
          />
        ))}
      </div>
      <p className="text-sm font-medium text-black dark:text-white">
        {selectedColor?.name || 'Pilih warna'}
      </p>
      {selectedColor?.image && (
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
          <Image
            src={selectedColor.image}
            alt={`${carName} - warna ${selectedColor.name}`}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}