// app/components/SpecsTable.tsx
interface SpecItem {
  label: string;
  value: string;
}

interface SpecCategory {
  category: string;
  items: SpecItem[];
}

interface SpecsTableProps {
  specs: SpecCategory[];
}

export default function SpecsTable({ specs }: SpecsTableProps) {
  return (
    <div className="space-y-8">
      {specs.map((category, index) => (
        <div key={index}>
          <h4 className="text-lg font-bold text-black dark:text-white mb-3">
            {category.category}
          </h4>
          <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg overflow-hidden">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className={`flex justify-between py-3 px-4 ${
                  idx !== category.items.length - 1
                    ? 'border-b border-gray-200 dark:border-zinc-700'
                    : ''
                }`}
              >
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.label}
                </span>
                <span className="font-medium text-black dark:text-white text-sm">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}