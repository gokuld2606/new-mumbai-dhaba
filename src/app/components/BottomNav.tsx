'use client';

type Props = {
  active: 'menu' | 'cart';
  totalItems: number;
  onHome: () => void;
  onCart: () => void;
  onReset: () => void;
};

export default function BottomNav({ active, totalItems, onHome, onCart, onReset }: Props) {
  return (
    <nav className="bottom-nav">
      {/* Home */}
      <button className="bottom-nav-item" onClick={onHome} aria-label="Home">
        <span className="text-xl">🏠</span>
      </button>

      {/* Reset filters */}
      <button className="bottom-nav-item" onClick={onReset} aria-label="Reset filters">
        <span className="text-xl">🔄</span>
      </button>

      {/* Cart */}
      <button
        className={`bottom-nav-item ${active === 'cart' ? 'active' : ''}`}
        onClick={onCart}
        aria-label="Cart">
        <span className="text-xl">🛒</span>
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems > 9 ? '9+' : totalItems}</span>
        )}
      </button>
    </nav>
  );
}
