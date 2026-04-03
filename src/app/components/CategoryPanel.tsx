'use client';

import { MenuCategory } from '@/data/menu';
import MenuSectionBlock from './MenuSectionBlock';

type Props = {
  category: MenuCategory;
};

const typeColors: Record<string, string> = {
  veg: 'bg-green-50 border-green-200 text-green-700',
  nonveg: 'bg-red-50 border-red-200 text-red-700',
  both: 'bg-orange-50 border-orange-200 text-orange-700',
};

const typeLabels: Record<string, string> = {
  veg: '🟢 Vegetarian',
  nonveg: '🔴 Non-Vegetarian',
  both: '🍽️ Veg & Non-Veg',
};

export default function CategoryPanel({ category }: Props) {
  return (
    <div className="animate-in">
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-4xl">{category.emoji}</span>
        <div>
          <h2 className="font-display text-2xl font-bold text-charcoal">
            {category.label}
          </h2>
          <span
            className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded border ${
              typeColors[category.type]
            }`}
          >
            {typeLabels[category.type]}
          </span>
        </div>
      </div>

      {/* Sections */}
      {category.sections.map((section, i) => (
        <MenuSectionBlock key={section.title} section={section} sectionIndex={i} />
      ))}
    </div>
  );
}
