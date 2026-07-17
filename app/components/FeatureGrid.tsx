// app/components/FeatureGrid.tsx
interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  const icons: Record<string, string> = {
    shield: '🛡️',
    engine: '⚡',
    connect: '📱',
    design: '🎨',
    safety: '🔒',
    comfort: '💺',
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-xl">
          <div className="text-3xl mb-3">{icons[feature.icon] || '✨'}</div>
          <h3 className="text-lg font-bold text-black dark:text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}