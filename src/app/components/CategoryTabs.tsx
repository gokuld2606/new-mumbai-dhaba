'use client';

import { MenuCategory } from '@/data/menu';

type Props = {
  categories: MenuCategory[];
  activeId: string;
  filter: 'all' | 'veg' | 'nonveg';
  onSelectCategory: (id: string) => void;
  onFilterChange: (f: 'all' | 'veg' | 'nonveg') => void;
};

export default function CategoryTabs({
  categories,
  activeId,
  filter,
  onSelectCategory,
  onFilterChange,
}: Props) {
  const visible = categories.filter(
    (c) => filter === 'all' || c.type === filter || c.type === 'both'
  );

  return (
    <div className="sticky top-0 z-40 sticky-tabs">
      <div className="max-w-5xl mx-auto px-4 py-3">
        {/* Filter pills */}
        <div className="flex justify-center gap-2 mb-3">
          {(['all', 'veg', 'nonveg'] as const).map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                filter === f
                  ? f === 'veg'
                    ? 'bg-green-600 text-white shadow-md'
                    : f === 'nonveg'
                    ? 'bg-red-700 text-white shadow-md'
                    : 'tab-active text-white'
                  : 'bg-white border text-gray-500 hover:border-orange-300'
              }`}
              style={filter === f && f === 'all' ? {} : {
                borderColor: filter !== f ? 'rgba(245,135,31,0.2)' : undefined
              }}
            >
              {f === 'all' ? '🍽️ All' : f === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}
            </button>
          ))}
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {visible.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeId === cat.id
                  ? 'tab-active text-white'
                  : 'bg-white text-gray-600'
              }`}
              style={activeId !== cat.id ? {
                border: '1.5px solid rgba(245,135,31,0.2)',
              } : {}}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
