// app/cars/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { allCars } from '@/data/cars';
import CarDetailHero from '@/components/CarDetailHero';
import FeatureGrid from '@/components/FeatureGrid';
import SafetyDetail from '@/components/SafetyDetail';
import SpecsTable from '@/components/SpecsTable';
import ColorPicker from '@/components/ColorPicker';
import Image from 'next/image';
import Link from 'next/link';

// Fungsi untuk ekstrak video ID dari URL YouTube
function getYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export async function generateStaticParams() {
  return allCars.map((car) => ({
    slug: car.slug,
  }));
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = allCars.find((c) => c.slug === slug);

  if (!car) {
    notFound();
  }

  const videoId = getYouTubeVideoId(car.youtubeUrl);

  return (
    <main className="bg-white dark:bg-zinc-900">
      {/* Hero */}
      <CarDetailHero
        tagline={car.tagline || `Hyundai ${car.name}`}
        heroImage={car.heroImage || car.image}
        name={car.name}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Tombol Kembali */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 mb-8 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Daftar Mobil
        </Link>

        {/* Harga */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            {car.name}
          </h1>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">
            {car.priceRange}
          </p>
        </div>

        {/* Deskripsi */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
            {car.descriptionLong || car.description}
          </p>
        </div>

        {/* Video */}
        {videoId && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6"></h2>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video resmi ${car.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Fitur Unggulan */}
        {car.features && car.features.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Fitur Canggih
            </h2>
            <FeatureGrid features={car.features} />
          </div>
        )}

        {/* Galeri Eksterior */}
        {car.exteriorGallery && car.exteriorGallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Galeri Eksterior
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {car.exteriorGallery.map((img, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={img}
                    alt={`${car.name} - ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Safety */}
        {car.safetyFeaturesDetail && car.safetyFeaturesDetail.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Hyundai SmartSense
            </h2>
            <SafetyDetail items={car.safetyFeaturesDetail} />
          </div>
        )}

        {/* Spesifikasi */}
        {car.specsTable && car.specsTable.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Spesifikasi Teknis
            </h2>
            <SpecsTable specs={car.specsTable} />
          </div>
        )}

        {/* Warna & Interior */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
            Warna & Interior
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-black dark:text-white mb-3">Pilihan Warna</h4>
              <ColorPicker colors={car.colors} carName={car.name} />
            </div>
            <div>
              <h4 className="font-semibold text-black dark:text-white mb-3">Galeri Interior</h4>
              {car.interiorImages && car.interiorImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {car.interiorImages.map((img, index) => (
                    <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                      <Image
                        src={img}
                        alt={`Interior ${car.name}`}
                        fill
                        className="object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">Data interior belum tersedia</p>
              )}
            </div>
          </div>
        </div>

        {/* Tombol Aksi - WhatsApp */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`https://wa.me/6281295566559?text=Halo%20Hyundai%20Puri%2C%20saya%20ingin%20test%20drive%20mobil%20${encodeURIComponent(car.name)}.%20Apakah%20bisa%20dijadwalkan%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-blue-500/30 text-center flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Test Drive Sekarang
          </a>

          <a
            href={`https://wa.me/6281295566559?text=Halo%20Hyundai%20Puri%2C%20saya%20tertarik%20dengan%20mobil%20${encodeURIComponent(car.name)}.%20Mohon%20info%20lebih%20lanjut%20(price%2C%20promo%2C%20dll).`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 text-black dark:text-white font-semibold py-4 px-8 rounded-xl transition duration-300 text-center flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Hubungi Dealer
          </a>
        </div>
      </div>
    </main>
  );
}
