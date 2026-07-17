'use client';

import { useState } from 'react';
import { Car } from '@/data/cars';

interface CarDetailTabsProps {
  car: Car;
}

type TabId = 'highlights' | 'specs' | 'safety' | 'performance';

export default function CarDetailTabs({ car }: CarDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('highlights');

  const tabs = [
    { id: 'highlights' as TabId, label: 'Highlights' },
    { id: 'specs' as TabId, label: 'Spesifikasi' },
    { id: 'safety' as TabId, label: 'Keselamatan' },
    { id: 'performance' as TabId, label: 'Performa' },
  ];

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-zinc-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium transition duration-300 border-b-2 ${
              activeTab === tab.id
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="py-6">
        {activeTab === 'highlights' && (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {car.description}
            </p>
            <ul className="space-y-2">
              {car.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 text-lg">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-black dark:text-white">Mesin & Transmisi</h4>
              <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Mesin</span>
                  <span className="font-medium">{car.specs.engine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Transmisi</span>
                  <span className="font-medium">{car.specs.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Kapasitas</span>
                  <span className="font-medium">{car.specs.seats}</span>
                </div>
              </div>
            </div>
            {car.dimensions && (
              <div className="space-y-3">
                <h4 className="font-semibold text-black dark:text-white">Dimensi</h4>
                <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Panjang</span>
                    <span className="font-medium">{car.dimensions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Lebar</span>
                    <span className="font-medium">{car.dimensions.width}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tinggi</span>
                    <span className="font-medium">{car.dimensions.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Jarak Sumbu Roda</span>
                    <span className="font-medium">{car.dimensions.wheelbase}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'safety' && (
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4">Hyundai SmartSense</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {car.safetyFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">🛡️</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg text-center">
                <p className="text-xs text-gray-400">Mesin</p>
                <p className="font-semibold text-black dark:text-white text-sm">
                  {car.performance.engineDetail}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg text-center">
                <p className="text-xs text-gray-400">Tenaga Maksimum</p>
                <p className="font-semibold text-black dark:text-white text-sm">
                  {car.performance.maxPower}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg text-center">
                <p className="text-xs text-gray-400">Torsi Maksimum</p>
                <p className="font-semibold text-black dark:text-white text-sm">
                  {car.performance.maxTorque}
                </p>
              </div>
            </div>
            {(car.performance.fuelConsumption || car.performance.groundClearance) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {car.performance.fuelConsumption && (
                  <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg flex justify-between">
                    <span className="text-gray-500">Konsumsi BBM</span>
                    <span className="font-medium">{car.performance.fuelConsumption}</span>
                  </div>
                )}
                {car.performance.groundClearance && (
                  <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg flex justify-between">
                    <span className="text-gray-500">Ground Clearance</span>
                    <span className="font-medium">{car.performance.groundClearance}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}