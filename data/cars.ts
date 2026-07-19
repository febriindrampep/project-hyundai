// data/cars.ts
export interface Car {
  name: string;
  price: string;
  priceRange: string;
  year: string;
  image: string;
  slug: string;
  category: string;
  isNew: boolean;
  description: string;
  tagline: string;
  heroImage: string;
  descriptionLong: string;
  specs: {
    engine: string;
    transmission: string;
    seats: string;
  };
  highlights: string[];
  safetyFeatures: string[];
  safetyFeaturesDetail: { name: string; description: string }[];
  features: { icon: string; title: string; description: string }[];
  specsTable: { category: string; items: { label: string; value: string }[] }[];
  performance: {
    engineDetail: string;
    maxPower: string;
    maxTorque: string;
    fuelConsumption?: string;
    groundClearance?: string;
  };
  dimensions: {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
  };
  colors: { name: string; hex: string; image?: string }[];
  interiorImages: string[];
  exteriorGallery: string[];
  youtubeUrl: string;
}

export const allCars: Car[] = [
  // ============================================================
  // 1. STARGAZER Cartenz
  // ============================================================
  {
    name: 'STARGAZER Cartenz',
    price: 'Rp 276.100.000',
    priceRange: 'Mulai Rp 276.100.000',
    year: '2025',
    image: '/images/hyundai/stargazer-cartenz_580x314.avif',
    slug: 'stargazer-cartenz',
    category: 'Family Choices',
    isNew: false,
    description: 'STARGAZER Cartenz adalah MPV modern yang mengutamakan kenyamanan keluarga dengan ruang kabin luas.',
    tagline: 'Made for Indonesian Family',
    heroImage: '/images/hyundai/stargazer-cartenz_580x314.avif',
    descriptionLong: 'STARGAZER Cartenz dirancang untuk memberikan kenyamanan maksimal bagi keluarga Indonesia. Dengan dimensi panjang 4.575 mm, lebar 1.780 mm, tinggi 1.695 mm, dan ground clearance 185 mm, MPV ini menghadirkan ruang kabin yang luas dan fleksibel untuk kebutuhan keluarga.',
    specs: { engine: '1.5 L', transmission: 'IVT/MT', seats: '7 Kursi' },
    highlights: [
      'Dimensi luas: 4.575 mm x 1.780 mm x 1.695 mm',
      'Ground clearance 185 mm untuk medan Indonesia',
      'Mesin Smartstream 1.5 MPI DOHC',
      'Pilihan transmisi manual 6-speed atau IVT'
    ],
    safetyFeatures: [
      'Electronic Stability Control (ESC)',
      'Hill-start Assist Control (HAC)',
      'Rear Parking Sensors',
      'Rearview Camera',
      'Traction Control System (TCS)'
    ],
    safetyFeaturesDetail: [
      { name: 'Electronic Stability Control (ESC)', description: 'Menjaga stabilitas kendaraan saat bermanuver mendadak.' },
      { name: 'Hill-start Assist Control (HAC)', description: 'Mencegah kendaraan mundur saat start di tanjakan.' },
      { name: 'Rearview Camera', description: 'Memudahkan parkir dengan tampilan area belakang.' }
    ],
    features: [
      { icon: 'comfort', title: 'Kenyamanan Keluarga', description: 'Ruang kabin luas dengan konfigurasi kursi fleksibel 7 penumpang.' },
      { icon: 'engine', title: 'Mesin Efisien', description: 'Smartstream 1.5 MPI dengan tenaga 113 dk dan torsi 143,8 Nm.' }
    ],
    specsTable: [
      { category: 'Mesin', items: [
        { label: 'Tipe Mesin', value: 'Smartstream G1.5 MPI Inline 4 Cylinder' },
        { label: 'Kapasitas', value: '1.497 cc' },
        { label: 'Tenaga Maksimum', value: '115 PS @ 6.300 rpm' }
      ]},
      { category: 'Dimensi', items: [
        { label: 'Panjang', value: '4.575 mm' },
        { label: 'Lebar', value: '1.780 mm' },
        { label: 'Tinggi', value: '1.695 mm' },
        { label: 'Ground Clearance', value: '185 mm' }
      ]}
    ],
    performance: {
      engineDetail: 'Smartstream G1.5 MPI',
      maxPower: '115 PS @ 6.300 rpm',
      maxTorque: '143.8 Nm @ 4.500 rpm',
      fuelConsumption: '15.4 km/L',
      groundClearance: '185 mm'
    },
    dimensions: { length: '4.575 mm', width: '1.780 mm', height: '1.695 mm', wheelbase: '2.780 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' },
      { name: 'Biru', hex: '#1E3A5F' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/Qth4WEfOaUk?si=RA5RT6ScCB5kYPXq'
  },

  // ============================================================
  // 2. STARGAZER Cartenz X
  // ============================================================
  {
    name: 'STARGAZER Cartenz X',
    price: 'Rp 370.250.000',
    priceRange: 'Mulai Rp 370.250.000',
    year: '2025',
    image: '/images/hyundai/stargazer-cartenz-x_640x344.avif',
    slug: 'stargazer-cartenz-x',
    category: 'Family Choices',
    isNew: true,
    description: 'STARGAZER Cartenz X hadir dengan sentuhan sporty dan fitur premium untuk keluarga Indonesia.',
    tagline: 'Dibuat untuk Jalanan Indonesia',
    heroImage: '/images/hyundai/stargazer-cartenz-x_640x344.avif',
    descriptionLong: 'STARGAZER Cartenz X adalah MPV premium yang dirancang khusus untuk menjawab kebutuhan keluarga dan profesional di Indonesia. Dengan desain baru yang berkelas dan fitur tercanggih, Cartenz X menawarkan standar baru bagi mobil keluarga yang menginginkan perpaduan antara desain futuristik, performa mumpuni, serta fitur keselamatan paling lengkap di kelasnya.',
    specs: { engine: '1.5 L', transmission: 'IVT', seats: '7 Kursi' },
    highlights: [
      'Desain eksterior tangguh dengan emblem Black H dan velg 17 inci Black Gloss Alloy',
      'Layar 10.25 inci TFT LCD cluster dan sistem audio premium BOSE 8 speaker',
      'Transmisi Shift-By-Wire (SBW) dengan konsol tengah lebih lega',
      'Ambient Mood Lighting dan kursi berbahan kulit sintetis'
    ],
    safetyFeatures: [
      'Forward Collision-Avoidance Assist (FCA)',
      'Lane Keeping Assist (LKA)',
      'Blind-Spot Collision-Avoidance Assist (BCA)',
      'Smart Cruise Control (SCC) with Stop & Go',
      'Surround View Monitor (SVM)',
      'Blind-spot View Monitor (BVM)'
    ],
    safetyFeaturesDetail: [
      { name: 'Forward Collision-Avoidance Assist (FCA)', description: 'Membantu menghindari atau mengurangi benturan dengan kendaraan atau pejalan kaki di depan.' },
      { name: 'Lane Keeping Assist (LKA)', description: 'Memberikan peringatan dan bantuan kemudi jika kendaraan keluar dari jalur tanpa sinyal.' },
      { name: 'Blind-Spot Collision-Avoidance Assist (BCA)', description: 'Mendeteksi kendaraan di blind spot dan memberikan peringatan saat akan berpindah jalur.' },
      { name: 'Smart Cruise Control (SCC) with Stop & Go', description: 'Mengatur kecepatan secara otomatis dengan kemampuan berhenti dan berjalan mengikuti lalu lintas.' },
      { name: 'Surround View Monitor (SVM)', description: 'Kamera 360° memberikan pandangan menyeluruh di sekitar kendaraan untuk parkir mudah.' }
    ],
    features: [
      { icon: 'shield', title: 'Keamanan Canggih', description: 'Dilengkapi Hyundai SmartSense dengan FCA, LKA, BCA, dan SCC untuk perlindungan maksimal.' },
      { icon: 'engine', title: 'Performa Responsif', description: 'Mesin Smartstream G1.5 MPI 1.497 cc dengan tenaga 115 PS dan torsi 143,8 Nm.' },
      { icon: 'connect', title: 'Konektivitas Pintar', description: 'Hyundai Bluelink memungkinkan pemantauan kendaraan dan panggilan darurat.' },
      { icon: 'design', title: 'Desain Premium', description: 'Black H Emblem, velg 17 inci Black Gloss, side skirts, dan roof rails.' }
    ],
    specsTable: [
      { category: 'Mesin', items: [
        { label: 'Tipe Mesin', value: 'Smartstream G1.5 MPI Inline 4 Cylinder' },
        { label: 'Kapasitas', value: '1.497 cc' },
        { label: 'Tenaga Maksimum', value: '115 PS @ 6.300 rpm' },
        { label: 'Torsi Puncak', value: '143,8 Nm @ 4.500 rpm' }
      ]},
      { category: 'Transmisi & Dimensi', items: [
        { label: 'Transmisi', value: 'Intelligent Variable Transmission (IVT)' },
        { label: 'Panjang', value: '4.610 mm' },
        { label: 'Lebar', value: '1.820 mm' },
        { label: 'Tinggi', value: '1.740 mm' },
        { label: 'Ground Clearance', value: '205 mm' }
      ]}
    ],
    performance: {
      engineDetail: 'Smartstream G1.5 MPI',
      maxPower: '115 PS @ 6.300 rpm',
      maxTorque: '143.8 Nm @ 4.500 rpm',
      fuelConsumption: '15.2 km/L',
      groundClearance: '205 mm'
    },
    dimensions: { length: '4.610 mm', width: '1.820 mm', height: '1.740 mm', wheelbase: '2.780 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' },
      { name: 'Optic White Matte', hex: '#F5F5F0' },
      { name: 'Gravity Gold Matte', hex: '#B8A88A' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif', 
  '/images/hyundai/StargazerCartenzXInterior2.avif',
  '/images/hyundai/StargazerCartenzXInterior3.avif',
  '/images/hyundai/StargazerCartenzXInterior4.avif',],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/oMOFNU1YPgU?si=x93Du8Z02I8bhQVh'
  },

  // ============================================================
  // 3. STARGAZER
  // ============================================================
  {
    name: 'STARGAZER',
    price: 'Rp 258.200.000',
    priceRange: 'Dari Rp 258.200.000',
    year: '2025',
    image: '/images/hyundai/stargazer-my23-pc-320-3.avif',
    slug: 'stargazer',
    category: 'Family Choices',
    isNew: false,
    description: 'STARGAZER adalah MPV andalan Hyundai dengan desain futuristik dan teknologi keselamatan.',
    tagline: 'The Real Indonesian Car',
    heroImage: '/images/hyundai/stargazer-my23-pc-320-3.avif',
    descriptionLong: 'STARGAZER hadir sebagai MPV yang menawarkan keseimbangan sempurna antara desain futuristik, kenyamanan, dan teknologi keselamatan. Harga Hyundai Stargazer di Indonesia dimulai dari Rp 258,2 Juta untuk varian dasar Active MT.',
    specs: { engine: '1.5 L', transmission: 'IVT/MT', seats: '7 Kursi' },
    highlights: [
      'Harga mulai Rp 258,2 Juta',
      'Mesin Smartstream 1.5 MPI',
      'Pilihan transmisi manual 6-speed atau IVT'
    ],
    safetyFeatures: [
      'Electronic Stability Control (ESC)',
      'Hill-start Assist Control (HAC)',
      'Rearview Camera'
    ],
    safetyFeaturesDetail: [
      { name: 'Electronic Stability Control (ESC)', description: 'Menjaga stabilitas kendaraan saat bermanuver mendadak.' },
      { name: 'Hill-start Assist Control (HAC)', description: 'Mencegah kendaraan mundur saat start di tanjakan.' }
    ],
    features: [
      { icon: 'comfort', title: 'MPV Keluarga', description: 'Ruang kabin luas dengan 7 kursi dan fleksibilitas tinggi.' },
      { icon: 'engine', title: 'Mesin Efisien', description: 'Smartstream 1.5 MPI dengan tenaga 113 dk dan torsi 143,8 Nm.' }
    ],
    specsTable: [
      { category: 'Mesin', items: [
        { label: 'Tipe Mesin', value: 'Smartstream G1.5 MPI Inline 4 Cylinder' },
        { label: 'Kapasitas', value: '1.497 cc' },
        { label: 'Tenaga Maksimum', value: '115 PS @ 6.300 rpm' }
      ]}
    ],
    performance: {
      engineDetail: 'Smartstream G1.5 MPI',
      maxPower: '115 PS @ 6.300 rpm',
      maxTorque: '143.8 Nm @ 4.500 rpm',
      fuelConsumption: '15.4 km/L',
      groundClearance: '185 mm'
    },
    dimensions: { length: '4.575 mm', width: '1.780 mm', height: '1.695 mm', wheelbase: '2.780 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/Ap2um9HvDNQ?si=P5Wg8MRrRe84c_uS'
  },

  // ============================================================
  // 4. STARGAZER X
  // ============================================================
  {
    name: 'STARGAZER X',
    price: 'Rp 347.750.000',
    priceRange: 'Mulai Rp 347.750.000',
    year: '2025',
    image: '/images/hyundai/Stargazer-x_640x344.avif',
    slug: 'stargazer-x',
    category: 'Family Choices',
    isNew: false,
    description: 'STARGAZER X mengusung tema dark & sporty dengan aksen hitam di seluruh bodi.',
    tagline: 'SUV Look MPV',
    heroImage: '/images/hyundai/Stargazer-x_640x344.avif',
    descriptionLong: 'STARGAZER X hadir dengan tampilan SUV look yang lebih berani. Dengan pembaruan ini, Stargazer X membawa peningkatan pada aspek kenyamanan, kepraktisan, hingga fitur keselamatan aktif yang makin lengkap.',
    specs: { engine: '1.5 L', transmission: 'IVT', seats: '7 Kursi' },
    highlights: [
      'Tampilan SUV look dengan cladding hitam tebal',
      'Pelek alloy 17 inci dengan finishing hitam sporty',
      'Roof rail bridge type untuk kesan SUV'
    ],
    safetyFeatures: [
      'Forward Collision-Avoidance Assist (FCA)',
      'Lane Keeping Assist (LKA)',
      'Blind-Spot Collision-Avoidance Assist (BCA)'
    ],
    safetyFeaturesDetail: [
      { name: 'Forward Collision-Avoidance Assist (FCA)', description: 'Membantu menghindari benturan dengan kendaraan di depan.' },
      { name: 'Lane Keeping Assist (LKA)', description: 'Memberikan peringatan jika kendaraan keluar dari jalur.' }
    ],
    features: [
      { icon: 'design', title: 'Desain SUV Look', description: 'Tampilan lebih tangguh dengan cladding hitam dan velg sporty.' },
      { icon: 'engine', title: 'Performa Responsif', description: 'Mesin Smartstream 1.5 MPI dengan transmisi IVT halus.' }
    ],
    specsTable: [
      { category: 'Mesin', items: [
        { label: 'Tipe Mesin', value: 'Smartstream G1.5 MPI Inline 4 Cylinder' },
        { label: 'Kapasitas', value: '1.497 cc' },
        { label: 'Tenaga Maksimum', value: '115 PS @ 6.300 rpm' }
      ]}
    ],
    performance: {
      engineDetail: 'Smartstream G1.5 MPI',
      maxPower: '115 PS @ 6.300 rpm',
      maxTorque: '143.8 Nm @ 4.500 rpm',
      fuelConsumption: '14.8 km/L',
      groundClearance: '190 mm'
    },
    dimensions: { length: '4.610 mm', width: '1.780 mm', height: '1.685 mm', wheelbase: '2.780 mm' },
    colors: [
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/zbrALbCopKs?si=RGjONSTWywVuq_CF'
  },

  // ============================================================
  // 5. STARIA
  // ============================================================
  {
    name: 'STARIA',
    price: 'Rp 954.800.000',
    priceRange: 'Mulai Rp 954.800.000',
    year: '2025',
    image: '/images/hyundai/STARIA_640x344.avif',
    slug: 'staria',
    category: 'Family Choices',
    isNew: false,
    description: 'STARIA adalah MPV premium dengan desain futuristik layaknya kapsul luar angkasa.',
    tagline: 'MPV Premium Masa Depan',
    heroImage: '/images/hyundai/STARIA_640x344.avif',
    descriptionLong: 'STARIA hadir sebagai MPV premium dengan desain futuristik. Harga Hyundai Staria mulai dari Rp934,7 juta untuk varian Signature 9 hingga Rp1,072 miliar untuk varian Signature 7. Ditenagai mesin diesel 2.2 CRDi Turbocharged yang mampu menghasilkan tenaga maksimal 177 PS.',
    specs: { engine: '2.2 L Diesel', transmission: '8-Speed Auto', seats: '7-9 Kursi' },
    highlights: [
      'Harga mulai Rp934,7 juta - Rp1,072 miliar',
      'Mesin diesel 2.2 CRDi Turbocharged 177 PS',
      'Pilihan konfigurasi 7-seater dan 9-seater',
      'Layar cluster 10.25 inci TFT LCD'
    ],
    safetyFeatures: [
      'Lane Following Assist (LFA)',
      'Highway Driving Assist (HDA)',
      'Forward Collision-Avoidance Assist (FCA)'
    ],
    safetyFeaturesDetail: [
      { name: 'Lane Following Assist (LFA)', description: 'Membantu kendaraan tetap di jalur dengan kemudi otomatis.' },
      { name: 'Highway Driving Assist (HDA)', description: 'Mengatur kecepatan dan jarak aman di jalan tol.' }
    ],
    features: [
      { icon: 'comfort', title: 'Kabin Premium', description: 'Interior mewah dengan konfigurasi kursi 7 atau 9 penumpang.' },
      { icon: 'engine', title: 'Mesin Diesel Bertenaga', description: '2.2 CRDi Turbocharged dengan torsi 430 Nm.' }
    ],
    specsTable: [
      { category: 'Mesin', items: [
        { label: 'Tipe Mesin', value: '2.2L CRDi Turbocharged (E-VGT)' },
        { label: 'Tenaga Maksimum', value: '177 PS @ 3.800 rpm' },
        { label: 'Torsi Puncak', value: '430 Nm @ 1.500-2.500 rpm' }
      ]},
      { category: 'Varian & Harga', items: [
        { label: 'STARIA Signature 7', value: 'Rp 1.072.400.000' },
        { label: 'STARIA Signature 9', value: 'Rp 934.700.000' }
      ]}
    ],
    performance: {
      engineDetail: '2.2L CRDi Turbocharged',
      maxPower: '177 PS @ 3.800 rpm',
      maxTorque: '430 Nm @ 1.500-2.500 rpm',
      fuelConsumption: '12.5 km/L',
      groundClearance: '210 mm'
    },
    dimensions: { length: '5.255 mm', width: '1.995 mm', height: '1.990 mm', wheelbase: '3.275 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/0Vrsk_c2iSw?si=4UppFVqcaFCIm8hA'
  },

  // ============================================================
  // 6. PALISADE
  // ============================================================
  {
    name: 'PALISADE',
    price: 'Rp 943.800.000',
    priceRange: 'Mulai Rp 943.800.000',
    year: '2025',
    image: '/images/hyundai/Palisade_640x344.avif',
    slug: 'palisade',
    category: 'Luxury Explorers',
    isNew: false,
    description: 'PALISADE adalah SUV mewah 7-penumpang dengan kemewahan setara limusin.',
    tagline: 'Premium SUV untuk Keluarga',
    heroImage: '/images/hyundai/Palisade_640x344.avif',
    descriptionLong: 'Hyundai Palisade 2025 menjadi salah satu SUV premium unggulan dari Hyundai yang menawarkan kemewahan, performa, serta teknologi terkini. Di pasar Indonesia, Hyundai Palisade tersedia dalam lima varian dan dibanderol dengan harga mulai dari Rp943,8 juta hingga Rp1,26 miliar.',
    specs: { engine: '2.2 L Diesel', transmission: '8-Speed Auto', seats: '7 Kursi' },
    highlights: [
      'Harga mulai Rp943,8 juta - Rp1,26 miliar',
      'Mesin diesel 2.2L CRDi 197 hp dan torsi 440 Nm',
      'Dimensi panjang 4.995 mm, lebar 1.975 mm',
      'Fitur ADAS lengkap dan 6 Airbag'
    ],
    safetyFeatures: [
      'ADAS (Advanced Driver Assistance Systems)',
      'Multi Collision Brake',
      'Blind Spot Monitor',
      'Lane Departure Warning System',
      'Vehicle Stability Control',
      'Hill-Start Assist dan Downhill Assist Control',
      '6 Airbag',
      'Kamera 360 derajat'
    ],
    safetyFeaturesDetail: [
      { name: 'ADAS (Advanced Driver Assistance Systems)', description: 'Sistem keselamatan aktif tingkat lanjut untuk perlindungan maksimal.' },
      { name: 'Multi Collision Brake', description: 'Mengurangi dampak benturan beruntun dengan pengereman otomatis.' },
      { name: 'Blind Spot Monitor', description: 'Mendeteksi kendaraan di area blind spot.' },
      { name: 'Kamera 360 derajat', description: 'Pandangan menyeluruh untuk parkir dan manuver.' }
    ],
    features: [
      { icon: 'shield', title: 'Keamanan Premium', description: 'Fitur ADAS lengkap, 6 airbag, dan kamera 360°.' },
      { icon: 'engine', title: 'Mesin Diesel Bertenaga', description: '2.2L CRDi 197 hp dengan torsi 440 Nm.' },
      { icon: 'comfort', title: 'Kemewahan Interior', description: 'AC dual-zone, kursi berpemanas dan pendingin, wireless charger.' }
    ],
    specsTable: [
      { category: 'Mesin', items: [
        { label: 'Tipe Mesin', value: '2.2L CRDi Diesel' },
        { label: 'Tenaga Maksimum', value: '197 hp' },
        { label: 'Torsi Puncak', value: '440 Nm' },
        { label: 'Transmisi', value: '8-Speed Otomatis' }
      ]},
      { category: 'Dimensi', items: [
        { label: 'Panjang', value: '4.995 mm' },
        { label: 'Lebar', value: '1.975 mm' },
        { label: 'Ground Clearance', value: '203 mm' },
        { label: 'Wheelbase', value: '2.900 mm' }
      ]}
    ],
    performance: {
      engineDetail: '2.2L CRDi Diesel',
      maxPower: '197 hp',
      maxTorque: '440 Nm',
      fuelConsumption: '9.8 km/L',
      groundClearance: '203 mm'
    },
    dimensions: { length: '4.995 mm', width: '1.975 mm', height: '1.750 mm', wheelbase: '2.900 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' },
      { name: 'Biru', hex: '#1E3A5F' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/kGeBg42C5rM?si=ul4xQoO1xT8CRYtd'
  },

  // ============================================================
  // 7. The All-new PALISADE
  // ============================================================
  {
    name: 'The All-new PALISADE',
    price: 'Rp 1.131.900.000',
    priceRange: 'Mulai Rp 1.131.900.000',
    year: '2025',
    image: '/images/hyundai/580x314.avif',
    slug: 'allnew-palisade',
    category: 'Luxury Explorers',
    isNew: true,
    description: 'Generasi terbaru PALISADE hadir dengan desain lebih agresif dan teknologi hybrid.',
    tagline: 'Premium has its shape',
    heroImage: '/images/hyundai/580x314.avif',
    descriptionLong: 'The All-New Palisade Hybrid hadir dalam 3 varian utama. Harga the all new PALISADE Hybrid OTR Jakarta: Signature AT Rp1.105.000.000, Calligraphy AT Rp1.274.000.000, dan Calligraphy AWD Rp1.358.000.000.',
    specs: { engine: '3.5 L V6 Hybrid', transmission: '8-Speed Auto', seats: '7 Kursi' },
    highlights: [
      'Harga mulai Rp1.105 Miliar - Rp1.358 Miliar',
      'Mesin Hybrid 3.5L V6 dengan tenaga 325 PS combined',
      '3 varian: Signature, Calligraphy, Calligraphy AWD'
    ],
    safetyFeatures: [
      'Forward Collision-Avoidance Assist (FCA)',
      'Blind-Spot Collision-Avoidance Assist (BCA)',
      'Lane Keeping Assist (LKA)',
      'Smart Cruise Control (SCC)',
      'Highway Driving Assist 2 (HDA 2)',
      'Surround View Monitor (SVM)'
    ],
    safetyFeaturesDetail: [
      { name: 'Forward Collision-Avoidance Assist (FCA)', description: 'Membantu menghindari benturan dengan kendaraan atau pejalan kaki.' },
      { name: 'Highway Driving Assist 2 (HDA 2)', description: 'Fitur mengemudi otonom tingkat lanjut di jalan tol.' }
    ],
    features: [
      { icon: 'engine', title: 'Mesin Hybrid', description: '3.5L V6 + motor listrik dengan tenaga 325 PS combined.' },
      { icon: 'shield', title: 'Keamanan Premium', description: 'Fitur HDA 2 dan keselamatan lengkap.' },
      { icon: 'comfort', title: 'Kemewahan Interior', description: 'Interior premium dengan material mewah.' }
    ],
    specsTable: [
      { category: 'Mesin', items: [
        { label: 'Tipe Mesin', value: '3.5L V6 + Electric Motor (Hybrid)' },
        { label: 'Tenaga Combined', value: '325 PS' },
        { label: 'Torsi Combined', value: '500 Nm' }
      ]},
      { category: 'Varian & Harga', items: [
        { label: 'Signature AT', value: 'Rp 1.105.000.000' },
        { label: 'Calligraphy AT', value: 'Rp 1.274.000.000' },
        { label: 'Calligraphy AWD', value: 'Rp 1.358.000.000' }
      ]}
    ],
    performance: {
      engineDetail: '3.5L V6 Hybrid',
      maxPower: '325 PS (combined)',
      maxTorque: '500 Nm (combined)',
      fuelConsumption: '12.5 km/L',
      groundClearance: '220 mm'
    },
    dimensions: { length: '5.050 mm', width: '1.980 mm', height: '1.760 mm', wheelbase: '2.950 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/0Cs6bahAXMI?si=U9gTGjf7cKx_yFv8'
  },

  // ============================================================
  // 8. SANTA FE
  // ============================================================
  {
    name: 'SANTA FE',
    price: 'Rp 735.800.000',
    priceRange: 'Mulai Rp 735.800.000',
    year: '2025',
    image: '/images/hyundai/SANTA-FE_580x314.avif',
    slug: 'santa-fe',
    category: 'Luxury Explorers',
    isNew: false,
    description: 'SANTA FE adalah SUV premium dengan desain tegas dan tangguh.',
    tagline: 'SUV Premium untuk Petualangan',
    heroImage: '/images/hyundai/SANTA-FE_580x314.avif',
    descriptionLong: 'All-new SANTA FE hadir dengan desain boxy modern dan pilihan mesin hybrid. Daftar Harga All-new SANTA FE: Calligraphy (1.6T-GDi HEV) Rp869,6 juta dan Calligraphy (2.5 GDi) Rp784,5 juta. Mobil ini dibanderol mulai Rp786,3 juta untuk tipe Prime sampai Rp869,6 juta.',
    specs: { engine: '1.6 L Hybrid / 2.5 L', transmission: '8-Speed Auto', seats: '7 Kursi' },
    highlights: [
      'Harga mulai Rp786,3 juta - Rp869,6 juta',
      'Mesin Hybrid 1.6T-GDi HEV atau 2.5 GDi',
      'Tenaga maksimal 235 PS'
    ],
    safetyFeatures: [
      'Forward Collision-Avoidance Assist (FCA)',
      'Blind-Spot Collision-Avoidance Assist (BCA)',
      'Lane Following Assist (LFA)',
      'Parking Collision-Avoidance Assist (PCA)'
    ],
    safetyFeaturesDetail: [
      { name: 'Forward Collision-Avoidance Assist (FCA)', description: 'Membantu menghindari benturan dengan kendaraan di depan.' },
      { name: 'Parking Collision-Avoidance Assist (PCA)', description: 'Mencegah benturan saat parkir.' }
    ],
    features: [
      { icon: 'engine', title: 'Pilihan Mesin Hybrid', description: 'Mesin 1.6T-GDi HEV dengan tenaga 235 PS.' },
      { icon: 'design', title: 'Desain Boxy Modern', description: 'Tampilan tegas dengan desain kotak yang modern.' },
      { icon: 'comfort', title: 'SUV 7-Seater', description: 'Ruang kabin luas untuk keluarga.' }
    ],
    specsTable: [
      { category: 'Varian & Harga', items: [
        { label: 'Prime', value: 'Rp 786.300.000' },
        { label: 'Calligraphy (2.5 GDi)', value: 'Rp 784.500.000' },
        { label: 'Calligraphy (1.6T-GDi HEV)', value: 'Rp 869.600.000' }
      ]}
    ],
    performance: {
      engineDetail: '1.6T-GDi HEV / 2.5 GDi',
      maxPower: '235 PS',
      maxTorque: '367 Nm',
      fuelConsumption: '15.0 km/L',
      groundClearance: '210 mm'
    },
    dimensions: { length: '4.830 mm', width: '1.900 mm', height: '1.720 mm', wheelbase: '2.815 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/6tLCPIROJPc?si=u0EoSw2yZNZywsoz'
  },

  // ============================================================
  // 9. TUCSON
  // ============================================================
  {
    name: 'TUCSON',
    price: 'Rp 652.000.000',
    priceRange: 'Mulai Rp 652.000.000',
    year: '2025',
    image: '/images/hyundai/Tucson_640x344.avif',
    slug: 'tucson',
    category: 'Luxury Explorers',
    isNew: false,
    description: 'TUCSON adalah SUV kompak mewah dengan desain sporty dan teknologi mutakhir.',
    tagline: 'SUV Modern dengan Teknologi Hybrid',
    heroImage: '/images/hyundai/Tucson_640x344.avif',
    descriptionLong: 'Hyundai Tucson hadir dengan mesin bensin 2.0 MPI yang bertenaga 156 PS, diesel 2.0 CRDi yang menawarkan torsi besar, serta varian hybrid 1.6 Turbo AWD dengan tenaga lebih dari 230 PS. Harga mulai Rp632 juta hingga Rp743 juta untuk varian hybrid.',
    specs: { engine: '2.0 L / 1.6 L Hybrid', transmission: '6-Speed Auto', seats: '5 Kursi' },
    highlights: [
      'Harga mulai Rp632 juta - Rp743 juta',
      'Varian Hybrid 1.6 Turbo AWD dengan tenaga 235 PS',
      'Mesin bensin 2.0 MPI 156 PS dan diesel 2.0 CRDi'
    ],
    safetyFeatures: [
      'Forward Collision-Avoidance Assist (FCA)',
      'Blind-Spot Collision-Avoidance Assist (BCA)',
      'Lane Keeping Assist (LKA)'
    ],
    safetyFeaturesDetail: [
      { name: 'Forward Collision-Avoidance Assist (FCA)', description: 'Membantu menghindari benturan dengan kendaraan di depan.' },
      { name: 'Blind-Spot Collision-Avoidance Assist (BCA)', description: 'Mendeteksi kendaraan di blind spot.' }
    ],
    features: [
      { icon: 'engine', title: 'Pilihan Mesin Lengkap', description: 'Bensin, Diesel, dan Hybrid dengan tenaga hingga 235 PS.' },
      { icon: 'design', title: 'Desain Sporty', description: 'Tampilan futuristik dengan garis bodi yang dinamis.' },
      { icon: 'connect', title: 'Teknologi Canggih', description: 'Fitur konektivitas dan keselamatan mutakhir.' }
    ],
    specsTable: [
      { category: 'Varian & Mesin', items: [
        { label: '2.0 MPI Signature', value: 'Rp 540.000.000' },
        { label: '2.0 CRDi Signature', value: 'Rp 600.000.000' },
        { label: 'Hybrid 1.6 Turbo AWD', value: 'Rp 660.000.000' }
      ]}
    ],
    performance: {
      engineDetail: '1.6L Turbo Hybrid / 2.0 MPI / 2.0 CRDi',
      maxPower: '235 PS (Hybrid)',
      maxTorque: '367 Nm (Hybrid)',
      fuelConsumption: '15.0 km/L',
      groundClearance: '190 mm'
    },
    dimensions: { length: '4.630 mm', width: '1.865 mm', height: '1.665 mm', wheelbase: '2.755 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/psxwb3e2vT8?si=5TvjYwqY4z3-kQuq'
  },

  // ============================================================
  // 10. IONIQ 5
  // ============================================================
  {
    name: 'IONIQ 5',
    price: 'Rp 809.000.000',
    priceRange: 'Mulai Rp 809.000.000',
    year: '2025',
    image: '/images/hyundai/IONIQ-5-default-580x314.avif',
    slug: 'ioniq-5',
    category: 'Electric Life',
    isNew: false,
    description: 'IONIQ 5 adalah SUV listrik futuristik dengan desain retro-futurist dan platform E-GMP.',
    tagline: 'Mobil Listrik Masa Depan',
    heroImage: '/images/hyundai/IONIQ-5-default-580x314.avif',
    descriptionLong: 'Hyundai IONIQ 5 tampil mencolok dengan desain retro-futuristik yang dibangun di atas platform E-GMP. Baterai berkapasitas 58-72,6 kWh, dengan jarak tempuh hingga 481 km. Harganya berkisar antara Rp749 juta hingga Rp859 juta OTR.',
    specs: { engine: 'Motor Listrik', transmission: '1-Speed', seats: '5 Kursi' },
    highlights: [
      'Harga mulai Rp749 juta - Rp859 juta',
      'Baterai 58-72,6 kWh dengan jarak tempuh 481 km',
      'Desain retro-futuristik di platform E-GMP'
    ],
    safetyFeatures: [
      'Forward Collision-Avoidance Assist (FCA)',
      'Blind-Spot Collision-Avoidance Assist (BCA)',
      'Lane Keeping Assist (LKA)',
      'Highway Driving Assist 2 (HDA 2)'
    ],
    safetyFeaturesDetail: [
      { name: 'Forward Collision-Avoidance Assist (FCA)', description: 'Membantu menghindari benturan dengan kendaraan atau pejalan kaki.' },
      { name: 'Highway Driving Assist 2 (HDA 2)', description: 'Fitur mengemudi otonom tingkat lanjut di jalan tol.' }
    ],
    features: [
      { icon: 'engine', title: 'Motor Listrik', description: 'Tenaga 225 hp dengan torsi 350 Nm.' },
      { icon: 'design', title: 'Desain Retro-Futuristik', description: 'Tampilan unik dengan lampu pixel khas IONIQ.' },
      { icon: 'connect', title: 'Fast Charging', description: 'Pengisian 10-80% hanya 18 menit.' }
    ],
    specsTable: [
      { category: 'Spesifikasi Listrik', items: [
        { label: 'Baterai', value: '58-72,6 kWh' },
        { label: 'Jarak Tempuh', value: '481 km (WLTP)' },
        { label: 'Tenaga Motor', value: '225 hp' },
        { label: 'Torsi', value: '350 Nm' }
      ]}
    ],
    performance: {
      engineDetail: 'Permanent Magnet Synchronous Motor (RWD)',
      maxPower: '225 hp',
      maxTorque: '350 Nm',
      fuelConsumption: '15.0 kWh/100km',
      groundClearance: '180 mm'
    },
    dimensions: { length: '4.635 mm', width: '1.890 mm', height: '1.605 mm', wheelbase: '3.000 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' },
      { name: 'Biru', hex: '#1E3A5F' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/QWKzPG6dE_o?si=B2xZCz72WonIY_KF'
  },

  // ============================================================
  // 11. KONA Electric
  // ============================================================
  {
    name: 'KONA Electric',
    price: 'Rp 565.250.000',
    priceRange: 'Mulai Rp 565.250.000',
    year: '2025',
    image: '/images/hyundai/images-elec.jpeg',
    slug: 'kona-electric',
    category: 'Electric Life',
    isNew: false,
    description: 'KONA Electric adalah SUV kompak listrik yang lincah dan efisien.',
    tagline: 'SUV Listrik Kompak',
    heroImage: '/images/hyundai/images-elec.jpeg',
    descriptionLong: 'Hyundai KONA Electric hadir dalam enam varian untuk pasar Indonesia. Harga on-the-road Jakarta berkisar dari Rp516 juta hingga Rp629 juta. Standard Range (48,9 kWh) dengan jarak tempuh hingga 448 km.',
    specs: { engine: 'Motor Listrik', transmission: '1-Speed', seats: '5 Kursi' },
    highlights: [
      'Harga mulai Rp516 juta - Rp629 juta',
      'Baterai 48,9 kWh dengan jarak tempuh 448 km',
      'Dua layar 12,3 inci menyatu'
    ],
    safetyFeatures: [
      'Forward Collision-Avoidance Assist (FCA)',
      'Blind-Spot Collision-Avoidance Assist (BCA)',
      'Lane Keeping Assist (LKA)'
    ],
    safetyFeaturesDetail: [
      { name: 'Forward Collision-Avoidance Assist (FCA)', description: 'Membantu menghindari benturan dengan kendaraan di depan.' },
      { name: 'Blind-Spot Collision-Avoidance Assist (BCA)', description: 'Mendeteksi kendaraan di blind spot.' }
    ],
    features: [
      { icon: 'engine', title: 'Motor Listrik', description: 'Tenaga 156 PS dengan torsi 255 Nm.' },
      { icon: 'connect', title: 'Teknologi Canggih', description: 'Dua layar 12,3 inci dan konektivitas lengkap.' }
    ],
    specsTable: [
      { category: 'Varian & Spesifikasi', items: [
        { label: 'Style STD Range', value: 'Rp499 juta, 48,9 kWh, 448 km' },
        { label: 'Prime STD Range', value: 'Rp515 juta, 48,9 kWh, 448 km' }
      ]}
    ],
    performance: {
      engineDetail: 'Permanent Magnet Synchronous Motor (FWD)',
      maxPower: '156 PS',
      maxTorque: '255 Nm',
      fuelConsumption: '14.5 kWh/100km',
      groundClearance: '160 mm'
    },
    dimensions: { length: '4.205 mm', width: '1.800 mm', height: '1.570 mm', wheelbase: '2.600 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/0B-dlhQwtLA?si=6043oxJZ7vP5H4Bl'
  },

  // ============================================================
  // 12. KONA N Line
  // ============================================================
  {
    name: 'KONA N Line',
    price: 'Rp 692.550.000',
    priceRange: 'Mulai Rp 692.550.000',
    year: '2025',
    image: '/images/hyundai/images-kona-nline.jpeg',
    slug: 'kona-nline',
    category: 'New Favorite',
    isNew: false,
    description: 'KONA N Line adalah versi sporty dari Kona dengan aksen N dan mesin bertenaga.',
    tagline: 'SUV Sporty dengan Sentuhan N',
    heroImage: '/images/hyundai/images-kona-nline.jpeg',
    descriptionLong: 'KONA N Line hadir dengan tampilan eksterior sporty: bumper agresif, velg 18 inci, dan aksen N khas. Mesin 1.6L Turbo dengan tenaga 198 ps dan torsi 265 Nm.',
    specs: { engine: '1.6 L Turbo', transmission: '7-Speed DCT', seats: '5 Kursi' },
    highlights: [
      'Tampilan eksterior N Line dengan bodykit sporty',
      'Mesin 1.6L Turbo dengan tenaga 198 ps',
      'Suspensi N-tuned untuk handling lebih presisi'
    ],
    safetyFeatures: [
      'Forward Collision-Avoidance Assist (FCA)',
      'Blind-Spot Collision-Avoidance Assist (BCA)',
      'Lane Keeping Assist (LKA)',
      'Rear Cross-Traffic Collision-Avoidance Assist (RCCA)'
    ],
    safetyFeaturesDetail: [
      { name: 'Forward Collision-Avoidance Assist (FCA)', description: 'Membantu menghindari benturan dengan kendaraan di depan.' },
      { name: 'Rear Cross-Traffic Collision-Avoidance Assist (RCCA)', description: 'Mencegah benturan saat mundur dengan mendeteksi kendaraan dari samping.' }
    ],
    features: [
      { icon: 'engine', title: 'Mesin Turbo Bertenaga', description: '1.6L Turbo dengan tenaga 198 ps dan torsi 265 Nm.' },
      { icon: 'design', title: 'Desain Sporty N Line', description: 'Bodykit agresif, velg 18 inci, dan aksen N khas.' }
    ],
    specsTable: [
      { category: 'Mesin', items: [
        { label: 'Tipe Mesin', value: '1.6L Turbo GDI' },
        { label: 'Tenaga Maksimum', value: '198 ps @ 6.000 rpm' },
        { label: 'Torsi Puncak', value: '265 Nm @ 1.500-4.500 rpm' },
        { label: 'Transmisi', value: '7-Speed DCT' }
      ]}
    ],
    performance: {
      engineDetail: '1.6L Turbo GDI',
      maxPower: '198 ps @ 6.000 rpm',
      maxTorque: '265 Nm @ 1.500-4.500 rpm',
      fuelConsumption: '14.0 km/L',
      groundClearance: '170 mm'
    },
    dimensions: { length: '4.385 mm', width: '1.825 mm', height: '1.595 mm', wheelbase: '2.660 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Merah', hex: '#B22222' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/9RuYjW_il6M?si=5aVa7uRIggELHbco'
  },

  // ============================================================
  // 13. CRETA
  // ============================================================
  {
    name: 'CRETA',
    price: 'Rp 307.800.000',
    priceRange: 'Mulai Rp 307.800.000',
    year: '2025',
    image: '/images/hyundai/new-creta-640x344.avif',
    slug: 'creta',
    category: 'New Favorite',
    isNew: true,
    description: 'CRETA adalah SUV kompak stylish dengan desain modern dan fitur teknologi canggih.',
    tagline: 'Made to be bold',
    heroImage: '/images/hyundai/new-creta-640x344.avif',
    descriptionLong: 'Hyundai Creta baru tersedia dalam dua varian: regular dengan lima tipe dan N-Line dengan dua tipe. Hyundai menjual varian regular mulai dari Rp299 jutaan hingga Rp426 jutaan. Creta regular menggunakan mesin Smartstream G1.5 MPI 1.497cc dengan tenaga 115 PS dan torsi 143,8 Nm.',
    specs: { engine: '1.5 L', transmission: 'MT/IVT', seats: '5 Kursi' },
    highlights: [
      'Harga mulai Rp299,7 juta - Rp426,94 juta',
      'Mesin Smartstream G1.5 MPI 1.497cc 115 PS',
      'Dimensi panjang 4.330 mm, lebar 1.790 mm',
      'Layar sentuh 10,2 inci pada varian Style dan Prime'
    ],
    safetyFeatures: [
      'Electronic Stability Control (ESC)',
      'Hill-start Assist Control (HAC)',
      'Rearview Camera'
    ],
    safetyFeaturesDetail: [
      { name: 'Electronic Stability Control (ESC)', description: 'Menjaga stabilitas kendaraan saat bermanuver mendadak.' },
      { name: 'Hill-start Assist Control (HAC)', description: 'Mencegah kendaraan mundur saat start di tanjakan.' }
    ],
    features: [
      { icon: 'design', title: 'Desain Modern', description: 'Tampilan SUV kompak dengan grille paramedic.' },
      { icon: 'engine', title: 'Mesin Efisien', description: 'Smartstream 1.5 MPI dengan tenaga 115 PS.' },
      { icon: 'connect', title: 'Teknologi Canggih', description: 'Layar 10,2 inci dengan Apple CarPlay & Android Auto.' }
    ],
    specsTable: [
      { category: 'Mesin', items: [
        { label: 'Tipe Mesin', value: 'Smartstream G1.5 MPI Inline 4 Cylinder' },
        { label: 'Kapasitas', value: '1.497 cc' },
        { label: 'Tenaga Maksimum', value: '115 PS @ 6.300 rpm' },
        { label: 'Torsi Puncak', value: '143,8 Nm @ 4.500 rpm' }
      ]},
      { category: 'Dimensi', items: [
        { label: 'Panjang', value: '4.330 mm' },
        { label: 'Lebar', value: '1.790 mm' },
        { label: 'Tinggi', value: '1.635 mm' },
        { label: 'Wheelbase', value: '2.610 mm' }
      ]}
    ],
    performance: {
      engineDetail: 'Smartstream G1.5 MPI',
      maxPower: '115 PS @ 6.300 rpm',
      maxTorque: '143,8 Nm @ 4.500 rpm',
      fuelConsumption: '16.0 km/L',
      groundClearance: '190 mm'
    },
    dimensions: { length: '4.330 mm', width: '1.790 mm', height: '1.635 mm', wheelbase: '2.610 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' },
      { name: 'Biru', hex: '#1E3A5F' },
      { name: 'Creamy White Pearl', hex: '#F5F0E8' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/FW0OBtFiJvI?si=eJ08WPLUJP7yrmLG'
  },

  // ============================================================
  // 14. CRETA N Line
  // ============================================================
  {
    name: 'CRETA N Line',
    price: 'Rp 473.000.000',
    priceRange: 'Mulai Rp 473.000.000',
    year: '2025',
    image: '/images/hyundai/images.jpeg',
    slug: 'creta-nline',
    category: 'New Favorite',
    isNew: false,
    description: 'CRETA N Line hadir dengan sentuhan performa tinggi dari divisi N.',
    tagline: 'SUV Sporty N Line',
    heroImage: '/images/hyundai/images.jpeg',
    descriptionLong: 'Hyundai New Creta N Line dibanderol seharga Rp460,5 juta, sedangkan N Line Turbo sebesar Rp507,2 juta. Creta N-Line mendapat sentuhan khusus di bagian bumper depan-belakang, kaliper rem, pelek roda, dual tip muffler, setir kemudi, dan karpet kabin.',
    specs: { engine: '1.6 L Turbo', transmission: '7-Speed DCT', seats: '5 Kursi' },
    highlights: [
      'Harga Rp460,5 juta - Rp507,2 juta',
      'Mesin 1.6L Turbo dengan tenaga 198 ps',
      'Bodykit N Line: bumper sporty, velg 18 inci, dual exhaust'
    ],
    safetyFeatures: [
      'Forward Collision-Avoidance Assist (FCA)',
      'Blind-Spot Collision-Avoidance Assist (BCA)',
      'Lane Keeping Assist (LKA)',
      'Rear Cross-Traffic Collision-Avoidance Assist (RCCA)'
    ],
    safetyFeaturesDetail: [
      { name: 'Forward Collision-Avoidance Assist (FCA)', description: 'Membantu menghindari benturan dengan kendaraan di depan.' },
      { name: 'Rear Cross-Traffic Collision-Avoidance Assist (RCCA)', description: 'Mencegah benturan saat mundur dengan mendeteksi kendaraan dari samping.' }
    ],
    features: [
      { icon: 'engine', title: 'Mesin Turbo Bertenaga', description: '1.6L Turbo dengan tenaga 198 ps dan torsi 265 Nm.' },
      { icon: 'design', title: 'Desain Sporty N Line', description: 'Bodykit agresif dengan aksen N khas.' }
    ],
    specsTable: [
      { category: 'Mesin', items: [
        { label: 'Tipe Mesin', value: '1.6L Turbo GDI' },
        { label: 'Tenaga Maksimum', value: '198 ps @ 6.000 rpm' },
        { label: 'Torsi Puncak', value: '265 Nm @ 1.500-4.500 rpm' },
        { label: 'Transmisi', value: '7-Speed DCT' }
      ]}
    ],
    performance: {
      engineDetail: '1.6L Turbo GDI',
      maxPower: '198 ps @ 6.000 rpm',
      maxTorque: '265 Nm @ 1.500-4.500 rpm',
      fuelConsumption: '14.5 km/L',
      groundClearance: '180 mm'
    },
    dimensions: { length: '4.330 mm', width: '1.790 mm', height: '1.635 mm', wheelbase: '2.610 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Merah', hex: '#B22222' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/GYtrg-UVxwM?si=tYeXWwXoqbWaqB7p'
  },

  // ============================================================
  // 15. VENUE
  // ============================================================
  {
    name: 'VENUE',
    price: 'Rp 340.000.000',
    priceRange: 'Mulai Rp 340.000.000',
    year: '2025',
    image: '/images/hyundai/venue-tt_640x344.avif',
    slug: 'venue',
    category: 'New Favorite',
    isNew: false,
    description: 'VENUE adalah SUV kompak tangguh dengan desain tegap dan fitur keselamatan canggih.',
    tagline: 'SUV Kompak Tangguh',
    heroImage: '/images/hyundai/venue-tt_640x344.avif',
    descriptionLong: 'Hyundai VENUE diluncurkan di IIMS 2025 dengan harga Rp340 juta OTR Jakarta. Dibekali mesin 1.0L Turbo GDI yang menghasilkan daya maksimal 120 PS dan torsi maksimal 172 Nm.',
    specs: { engine: '1.0 L Turbo', transmission: '7-Speed DCT', seats: '5 Kursi' },
    highlights: [
      'Harga Rp340 juta OTR Jakarta',
      'Mesin 1.0L Turbo GDI 120 PS dan torsi 172 Nm',
      'SUV termurah dari Hyundai'
    ],
    safetyFeatures: [
      'Electronic Stability Control (ESC)',
      'Hill-start Assist Control (HAC)',
      'Rearview Camera'
    ],
    safetyFeaturesDetail: [
      { name: 'Electronic Stability Control (ESC)', description: 'Menjaga stabilitas kendaraan saat bermanuver mendadak.' },
      { name: 'Hill-start Assist Control (HAC)', description: 'Mencegah kendaraan mundur saat start di tanjakan.' }
    ],
    features: [
      { icon: 'engine', title: 'Mesin Turbo 1.0L', description: 'Tenaga 120 PS dan torsi 172 Nm.' },
      { icon: 'design', title: 'Desain Tangguh', description: 'Tampilan SUV kompak dengan ground clearance 190 mm.' },
      { icon: 'comfort', title: 'SUV Terjangkau', description: 'Harga Rp340 juta dengan fitur keselamatan lengkap.' }
    ],
    specsTable: [
      { category: 'Mesin', items: [
        { label: 'Tipe Mesin', value: '1.0L Turbo GDI' },
        { label: 'Tenaga Maksimum', value: '120 PS @ 6.000 rpm' },
        { label: 'Torsi Puncak', value: '172 Nm @ 1.500-4.000 rpm' },
        { label: 'Transmisi', value: '7-Speed DCT' }
      ]}
    ],
    performance: {
      engineDetail: '1.0L Turbo GDI',
      maxPower: '120 PS @ 6.000 rpm',
      maxTorque: '172 Nm @ 1.500-4.000 rpm',
      fuelConsumption: '15.5 km/L',
      groundClearance: '190 mm'
    },
    dimensions: { length: '4.040 mm', width: '1.770 mm', height: '1.595 mm', wheelbase: '2.520 mm' },
    colors: [
      { name: 'Putih', hex: '#FFFFFF' },
      { name: 'Hitam', hex: '#1A1A1A' },
      { name: 'Abu-abu', hex: '#808080' }
    ],
    interiorImages: ['/images/hyundai/InteriorCaretenzX.avif'],
    exteriorGallery: [],
    youtubeUrl: 'https://youtu.be/-GesRbCPlLc?si=NHv7iOopWPcuqQT8'
  }
];

export const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'New Favorite', label: 'New Favorite' },
  { id: 'Luxury Explorers', label: 'Luxury Explorers' },
  { id: 'Family Choices', label: 'Family Choices' },
  { id: 'Electric Life', label: 'Electric Life' },
];
