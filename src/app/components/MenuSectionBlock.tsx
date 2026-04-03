'use client';

import { MenuSection } from '@/data/menu';
import MenuItemCard from './MenuItemCard';

type Props = {
  section: MenuSection;
  sectionIndex: number;
};

export default function MenuSectionBlock({ section, sectionIndex }: Props) {
  return (
    <div className="mb-6">
      {/* Section heading with ornament */}
      <div className="divider-ornament">
        <span className="text-xs font-bold tracking-widest text-gold uppercase">
          {section.title}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {section.items.map((item, i) => (
          <MenuItemCard
            key={item.name}
            item={item}
            index={sectionIndex * 20 + i}
          />
        ))}
      </div>
    </div>
  );
}
