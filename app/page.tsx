import Hero from './components/Hero';
import Carlisting from './components/Carlisting';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import ContactSection from '@/components/ContactSection';
import LocationSection from '@/components/LocationSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <YouTubeEmbed
        videoId="98dzzAQEQTc"
        title=" The all-new PALISADE"
        description="Lihat bagaimana Hyundai PALISADE menghadirkan kemewahan dan teknologi canggih."
      />
      <Carlisting />
      <ContactSection />
      <LocationSection />
    </main>
  );
}
