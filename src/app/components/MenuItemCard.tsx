'use client';

import { MenuItem } from '@/data/menu';

type Props = {
  item: MenuItem;
  index: number;
};

export default function MenuItemCard({ item, index }: Props) {
  return (
    <div
      className="menu-card flex items-center justify-between py-3 px-4 rounded-xl bg-white border border-orange-50 hover:border-orange-200 animate-in"
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {/* Veg/non-veg indicator dot not applicable here — kept minimal */}
        <span className="text-sm text-charcoal font-medium leading-tight truncate">
          {item.name}
        </span>
        {item.tag === 'SPL' && (
          <span className="spl-badge flex-shrink-0">SPL</span>
        )}
      </div>
      <span className="price-badge flex-shrink-0 ml-3">₹{item.price}</span>
    </div>
  );
}
