// app/components/LocationSection.tsx
'use client';

export default function LocationSection() {
  // Alamat showroom
  const address = 'Jl. Puri Lkr. Luar, RT.1/RW.1, Kembangan Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11610';

  // Embed Google Maps (dari link yang Anda berikan)
  const embedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.549984420835!2d106.7337219735598!3d-6.190917593796693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f70d9e01aaa3%3A0x1322917e01ee7a8b!2sHyundai%20Puri%20Official!5e0!3m2!1sid!2sid!4v1784522869585!5m2!1sid!2sid';

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Lokasi Showroom
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            Kunjungi showroom kami untuk melihat langsung dan test drive mobil impian Anda.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Alamat - Kiri */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black dark:text-white">Alamat Showroom</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    Jl. Puri Lkr. Luar, RT.1/RW.1,<br />
                    Kembangan Sel., Kec. Kembangan,<br />
                    Kota Jakarta Barat, Daerah Khusus<br />
                    Ibukota Jakarta 11610
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/10 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black dark:text-white">Jam Operasional</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Senin - Sabtu: 08:00 - 20:00<br />
                    Minggu: 09:00 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps - Kanan */}
          <div className="lg:col-span-2">
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-700 bg-gray-200 dark:bg-zinc-800">
              <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Lokasi Showroom Hyundai Puri"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
