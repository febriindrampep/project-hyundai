'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Data semua model mobil
const carModels = [
  { name: 'STARGAZER Cartenz', slug: 'stargazer-cartenz' },
  { name: 'STARGAZER Cartenz X', slug: 'stargazer-cartenz-x' },
  { name: 'STARGAZER', slug: 'stargazer' },
  { name: 'STARGAZER X', slug: 'stargazer-x' },
  { name: 'CRETA', slug: 'creta' },
  { name: 'CRETA N Line', slug: 'creta-nline' },
  { name: 'VENUE', slug: 'venue' },
  { name: 'SANTA FE', slug: 'santa-fe' },
  { name: 'PALISADE', slug: 'palisade' },
  { name: 'The All-new PALISADE', slug: 'allnew-palisade' },
  { name: 'STARIA', slug: 'staria' },
  { name: 'TUCSON', slug: 'tucson' },
  { name: 'KONA Electric', slug: 'kona-electric' },
  { name: 'KONA N Line', slug: 'kona-nline' },
  { name: 'IONIQ 5', slug: 'ioniq-5' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCarsDropdownOpen, setIsCarsDropdownOpen] = useState(false);
  const [isMobileCarsOpen, setIsMobileCarsOpen] = useState(false);

  // Cegah scroll saat mobile menu terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (!isMobileMenuOpen) {
      setIsCarsDropdownOpen(false);
      setIsMobileCarsOpen(false);
    }
  };

  const handleMouseEnter = () => setIsCarsDropdownOpen(true);
  const handleMouseLeave = () => setIsCarsDropdownOpen(false);
  const toggleMobileCars = () => setIsMobileCarsOpen((prev) => !prev);

  // Helper untuk mengecek link aktif
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-wide">
              HYUNDAI Puri
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className={`transition duration-300 ${
                isActive('/') ? 'text-blue-400 font-semibold' : 'hover:text-gray-300'
              }`}
            >
              Home
            </Link>

            {/* Dropdown Cars */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center transition duration-300 focus:outline-none ${
                  isCarsDropdownOpen ? 'text-blue-400' : 'hover:text-gray-300'
                }`}
                aria-haspopup="true"
                aria-expanded={isCarsDropdownOpen}
                aria-label="Daftar model mobil"
              >
                Cars
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    isCarsDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCarsDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-black border border-gray-700 rounded-md shadow-lg py-1 max-h-96 overflow-y-auto z-10"
                  role="menu"
                >
                  {carModels.map((model) => (
                    <Link
                      key={model.slug}
                      href={`/cars/${model.slug}`}
                      className={`block px-4 py-2 text-sm hover:bg-gray-800 transition duration-200 ${
                        isActive(`/cars/${model.slug}`) ? 'bg-gray-800 text-blue-400' : ''
                      }`}
                      role="menuitem"
                    >
                      {model.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#ContactSection"
              className={`transition duration-300 ${
                isActive('/contact') ? 'text-blue-400 font-semibold' : 'hover:text-gray-300'
              }`}
            >
              Contact
            </Link>

            {/* Tombol CTA Desktop */}
            <Link
              href="/test-drive"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 text-sm font-medium"
            >
              Test Drive
            </Link>
          </div>

          {/* Tombol Hamburger Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-black border-t border-gray-800">
          <Link
            href="/"
            className={`block px-3 py-2 rounded transition duration-300 ${
              isActive('/') ? 'bg-gray-800 text-blue-400' : 'hover:bg-gray-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Cars dengan sub-menu mobile */}
          <div>
            <button
              onClick={toggleMobileCars}
              className="flex items-center justify-between w-full hover:bg-gray-800 px-3 py-2 rounded transition duration-300"
              aria-expanded={isMobileCarsOpen}
            >
              <span>Cars</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isMobileCarsOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isMobileCarsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-4 space-y-1 mt-1 max-h-[350px] overflow-y-auto">
                {carModels.map((model) => (
                  <Link
                    key={model.slug}
                    href={`/cars/${model.slug}`}
                    className={`block hover:bg-gray-800 px-3 py-2 rounded transition duration-300 text-sm ${
                      isActive(`/cars/${model.slug}`) ? 'bg-gray-800 text-blue-400' : ''
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileCarsOpen(false);
                    }}
                  >
                    {model.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="#ContactSection"
            className={`block px-3 py-2 rounded transition duration-300 ${
              isActive('/contact') ? 'bg-gray-800 text-blue-400' : 'hover:bg-gray-800'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Tombol CTA Mobile */}
          <Link
            href="/#ContactSection"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-center transition duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Test Drive
          </Link>
        </div>
      </div>
    </nav>
  );
}
