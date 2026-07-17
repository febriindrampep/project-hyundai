// app/components/CarDetailHero.tsx
import Image from 'next/image';

interface CarDetailHeroProps {
  tagline: string;
  heroImage: string;
  name: string;
}

export default function CarDetailHero({ tagline, heroImage, name }: CarDetailHeroProps) {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900">
      <Image
        src={heroImage}
        alt={name}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
            {tagline}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-2 max-w-2xl">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}