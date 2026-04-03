'use client';

import { useCart } from '@/context/CartContext';

type Props = {
  name: string;
  price: number;
  tag?: 'SPL' | 'NEW';
};

export default function MenuItemRow({ name, price, tag }: Props) {
  const { items, addItem, updateQty } = useCart();
  const cartItem = items.find((i) => i.name === name);
  const qty = cartItem?.quantity ?? 0;

  if (price === 0) return null; // skip non-numeric prices like "8 & 10"

  return (
    <div className="menu-card flex items-center gap-3 px-3 py-3">
      {/* Name + tag */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-sm font-bold leading-snug" style={{ color: '#1C0A00' }}>
            {name}
          </span>
          {tag === 'SPL' && <span className="spl-badge">SPL</span>}
        </div>
      </div>

      {/* Controls + price */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Price tag */}
        <span className="price-tag">₹{price}</span>

        {/* Add / Qty */}
        {qty === 0 ? (
          <button className="add-btn" onClick={() => addItem(name, price)} aria-label={`Add ${name}`}>
            +
          </button>
        ) : (
          <div className="flex items-center gap-1 rounded-full px-1 py-0.5"
            style={{ background: 'linear-gradient(135deg,#F5871F,#D96B0A)' }}>
            <button
              onClick={() => updateQty(name, -1)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black text-base"
              style={{ background: 'rgba(0,0,0,0.2)' }}>
              −
            </button>
            <span className="text-white font-black text-sm min-w-[18px] text-center">{qty}</span>
            <button
              onClick={() => updateQty(name, +1)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black text-base"
              style={{ background: 'rgba(0,0,0,0.2)' }}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
