'use client';

import { menuData, MenuItem } from '@/data/menu';
import MenuItemCard from './MenuItemCard';

type SearchResult = {
  categoryLabel: string;
  sectionTitle: string;
  item: MenuItem;
};

type Props = {
  query: string;
};

export default function SearchResults({ query }: Props) {
  const q = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  for (const cat of menuData) {
    for (const section of cat.sections) {
      for (const item of section.items) {
        if (item.name.toLowerCase().includes(q)) {
          results.push({
            categoryLabel: cat.label,
            sectionTitle: section.title,
            item,
          });
        }
      }
    }
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <div className="text-4xl mb-3">🍽️</div>
        <p className="font-medium">No dishes found for &quot;{query}&quot;</p>
        <p className="text-sm mt-1">Try searching for chicken, paneer, biryani...</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-500 mb-4 font-medium">
        {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {results.map((r, i) => (
          <div key={`${r.item.name}-${i}`}>
            <p className="text-xs text-gray-400 mb-1 px-1">
              {r.categoryLabel} › {r.sectionTitle}
            </p>
            <MenuItemCard item={r.item} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
