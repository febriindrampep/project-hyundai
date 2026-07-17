// app/components/SafetyDetail.tsx
interface SafetyItem {
  name: string;
  description: string;
}

interface SafetyDetailProps {
  items: SafetyItem[];
}

export default function SafetyDetail({ items }: SafetyDetailProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg">
          <h4 className="font-semibold text-black dark:text-white text-sm mb-1">
            {item.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}