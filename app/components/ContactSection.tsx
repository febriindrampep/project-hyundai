// app/components/ContactSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Buat pesan untuk WhatsApp
    const message = `Halo Hyundai Puri!%0A%0A*Nama:* ${formData.name}%0A*Email:* ${formData.email}%0A*Telepon:* ${formData.phone || 'Tidak diisi'}%0A*Pesan:* ${formData.message}`;

    // Nomor WhatsApp (ganti dengan nomor Anda)
    const phoneNumber = '6281295566559'; // tanpa + dan tanpa spasi

    // Redirect ke WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');

    // Tampilkan notifikasi sukses
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id='ContactSection' className="py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Hubungi Kami
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            Ada pertanyaan tentang produk Hyundai? Tim kami siap membantu Anda.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Bagian Kiri: Foto Profil + Info Kontak */}
          <div className="space-y-6">
            {/* Kartu Profil */}
            <div className="bg-gray-50 dark:bg-zinc-800 rounded-2xl p-6 md:p-8 shadow-lg text-center border border-gray-100 dark:border-zinc-700">
              {/* Foto Profil */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
                <Image
                  src="/public/images/hyundai/Profil.jpeg"
                  alt="Foto Profil Hyundai Puri"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h3 className="mt-4 text-xl md:text-2xl font-bold text-black dark:text-white">
                Hyundai Puri Team
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Dealer Resmi Hyundai
              </p>

              <div className="mt-4 flex justify-center gap-3">
                <span className="inline-flex items-center gap-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">
                  ⭐ 4.9/5
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full">
                  ✅ Terpercaya
                </span>
              </div>
            </div>

            {/* Info Kontak */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl shadow-sm flex items-start gap-3">
                <div className="bg-blue-600/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs text-gray-400">Alamat</h4>
                  <p className="text-sm font-medium text-black dark:text-white">
                    Jl. Puri Lkr. Luar, RT.1/RW.1, Kembangan Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11610<br />
                    
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl shadow-sm flex items-start gap-3">
                <div className="bg-blue-600/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs text-gray-400">Telepon</h4>
                  <p className="text-sm font-medium text-black dark:text-white">
                    +62 81295566559
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl shadow-sm flex items-start gap-3">
                <div className="bg-blue-600/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs text-gray-400">Email</h4>
                  <p className="text-sm font-medium text-black dark:text-white">
                    antanajerry86@gmail.com
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl shadow-sm flex items-start gap-3">
                <div className="bg-green-600/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs text-gray-400">WhatsApp</h4>
                  <a
                    href="https://wa.me/6281295566559?text=Halo%20Hyundai%20Puri%2C%20saya%20ingin%20bertanya%20tentang%20mobil."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-green-600 hover:underline"
                  >
                    +62 81295566559
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Form */}
          <div className="bg-gray-50 dark:bg-zinc-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-zinc-700">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">✉️</span> Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="email@anda.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="+62 812 3456 7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-blue-500/30"
              >
                Kirim Pesan via WhatsApp
              </button>

              {isSubmitted && (
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-3 rounded-lg text-center text-sm">
                  ✅ Pesan Anda berhasil dikirim! Silakan lanjutkan ke WhatsApp.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
