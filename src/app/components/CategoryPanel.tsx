'use client';

import { MenuCategory } from '@/data/menu';
import MenuSectionBlock from './MenuSectionBlock';

type Props = { category: MenuCategory };

const typeStyles: Record<string, { bg: string; border: string; color: string; label: string }> = {
  veg:    { bg: '#F0FDF4', border: '#BBF7D0', color: '#15803D', label: '🟢 Vegetarian' },
  nonveg: { bg: '#FFF1F2', border: '#FECDD3', color: '#B91C1C', label: '🔴 Non-Vegetarian' },
  both:   { bg: '#FFF7ED', border: '#FED7AA', color: '#C2410C', label: '🍽️ Veg & Non-Veg' },
};

export default function CategoryPanel({ category }: Props) {
  const style = typeStyles[category.type];
  return (
    <div className="animate-in">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-4xl">{category.emoji}</span>
        <div>
          <h2 className="font-display text-2xl font-bold" style={{ color: '#1C0A00' }}>
            {category.label}
          </h2>
          <span className="inline-block mt-1 text-xs font-bold px-3 py-0.5 rounded-full border"
            style={{ background: style.bg, borderColor: style.border, color: style.color }}>
            {style.label}
          </span>
        </div>
      </div>
      {category.sections.map((section, i) => (
        <MenuSectionBlock key={section.title} section={section} sectionIndex={i} />
      ))}
    </div>
  );
}
