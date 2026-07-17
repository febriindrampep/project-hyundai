// app/components/YouTubeEmbed.tsx
'use client';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function YouTubeEmbed({
  videoId,
  title = 'Video Promo Hyundai',
  description = 'Temukan keunggulan dan inovasi terbaru dari Hyundai melalui video berikut.',
  className = '',
}: YouTubeEmbedProps) {
  return (
    <section className={`py-8 md:py-12 px-4 md:px-8 bg-white dark:bg-zinc-900 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Judul */}
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white text-center mb-2">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6 text-sm md:text-base">
            {description}
          </p>
        )}

        {/* Video - Responsif 16:9 */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}