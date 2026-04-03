'use client';

import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

function CartContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tableNo = searchParams.get('table');
  const { items, updateQty, removeItem, clearCart, totalPrice, totalItems } = useCart();
  const [ordered, setOrdered] = useState(false);

  const goMenu = () => router.push(`/menu${tableNo ? `?table=${tableNo}` : ''}`);
  const goHome = () => router.push(`/${tableNo ? `?table=${tableNo}` : ''}`);

  const handleOrder = () => {
    setOrdered(true);
    clearCart();
    setTimeout(() => router.push(`/${tableNo ? `?table=${tableNo}` : ''}`), 3000);
  };

  if (ordered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center hero-bg">
        <div className="text-7xl mb-4 pop-in">🎉</div>
        <h2 className="font-display text-3xl font-black mb-2" style={{ color: '#F5871F' }}>Order Placed!</h2>
        <p className="font-semibold" style={{ color: 'rgba(255,245,228,0.7)' }}>
          {tableNo ? `Table ${tableNo} — ` : ''}Your order is being prepared.
        </p>
        <p className="text-sm mt-2" style={{ color: 'rgba(255,245,228,0.4)' }}>Redirecting home...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ paddingBottom: 100 }}>

      {/* Top stripe */}
      <div className="h-1 flex-shrink-0"
        style={{ background: 'linear-gradient(90deg,#F5871F,#FFCD00,#C8102E,#F5871F)' }} />

      {/* Header */}
      <div className="sticky top-0 z-40 sticky-tabs">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={goMenu} className="flex items-center gap-2 text-sm font-bold"
            style={{ color: '#F5871F' }}>
            ← Menu
          </button>
          <h1 className="font-display text-lg font-bold" style={{ color: '#1C0A00' }}>
            🛒 Your Cart
          </h1>
          {tableNo && (
            <div className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(245,135,31,0.12)', color: '#F5871F', border: '1px solid rgba(245,135,31,0.3)' }}>
              🪑 Table {tableNo}
            </div>
          )}
        </div>
      </div>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-4">

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <p className="font-display text-xl font-bold mb-2" style={{ color: '#502314' }}>Cart is empty</p>
            <p className="text-sm text-gray-500 mb-6">Add items from the menu to get started.</p>
            <button onClick={goMenu} className="px-8 py-3 rounded-2xl font-black text-white"
              style={{ background: 'linear-gradient(135deg,#F5871F,#C8102E)', boxShadow: '0 4px 20px rgba(245,135,31,0.4)' }}>
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            {/* Item count */}
            <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">
              {totalItems} item{totalItems !== 1 ? 's' : ''}
            </p>

            {/* Item list */}
            <div className="flex flex-col gap-2 mb-6">
              {items.map((item) => (
                <div key={item.name} className="menu-card flex items-center gap-3 px-4 py-3 animate-in">

                  {/* Name & unit price */}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate" style={{ color: '#1C0A00' }}>{item.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">₹{item.price} each</p>
                  </div>

                  {/* Qty stepper */}
                  <div className="flex items-center gap-1.5 rounded-full px-1 py-0.5"
                    style={{ background: 'linear-gradient(135deg,#F5871F,#D96B0A)' }}>
                    <button
                      onClick={() => updateQty(item.name, -1)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black"
                      style={{ background: 'rgba(0,0,0,0.2)', fontSize: '1rem' }}>
                      −
                    </button>
                    <span className="text-white font-black text-sm min-w-[18px] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.name, +1)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black"
                      style={{ background: 'rgba(0,0,0,0.2)', fontSize: '1rem' }}>
                      +
                    </button>
                  </div>

                  {/* Item total */}
                  <div className="text-right flex-shrink-0">
                    <p className="font-black text-sm" style={{ color: '#F5871F' }}>₹{item.price * item.quantity}</p>
                  </div>

                  {/* Delete */}
                  <button onClick={() => removeItem(item.name)}
                    className="text-gray-300 hover:text-red-500 transition-colors text-lg flex-shrink-0"
                    aria-label="Remove item">
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            {/* Bill summary */}
            <div className="rounded-2xl p-4 mb-4"
              style={{ background: 'white', border: '1.5px solid rgba(245,135,31,0.18)' }}>
              <p className="font-bold text-sm mb-3 uppercase tracking-widest text-gray-400">Bill Summary</p>

              {items.map((item) => (
                <div key={item.name} className="flex justify-between text-sm py-1.5"
                  style={{ borderBottom: '1px solid rgba(245,135,31,0.08)' }}>
                  <span className="text-gray-600">{item.name} × {item.quantity}</span>
                  <span className="font-bold" style={{ color: '#1C0A00' }}>₹{item.price * item.quantity}</span>
                </div>
              ))}

              <div className="flex justify-between items-center pt-3 mt-1">
                <span className="font-black text-base" style={{ color: '#1C0A00' }}>Total</span>
                <span className="font-black text-xl" style={{ color: '#F5871F' }}>₹{totalPrice}</span>
              </div>
            </div>

            {/* Clear cart */}
            <button onClick={clearCart}
              className="w-full py-2 rounded-xl text-sm font-bold mb-3 transition-all"
              style={{ color: '#C8102E', background: 'rgba(200,16,46,0.07)', border: '1px solid rgba(200,16,46,0.2)' }}>
              Clear Cart
            </button>

            {/* Place order */}
            <button onClick={handleOrder}
              className="w-full py-4 rounded-2xl font-black text-lg text-white transition-all active:scale-95"
              style={{
                background: 'linear-gradient(135deg,#F5871F,#C8102E)',
                boxShadow: '0 6px 28px rgba(245,135,31,0.45)'
              }}>
              ✅ &nbsp;Place Order · ₹{totalPrice}
            </button>

            {tableNo && (
              <p className="text-center text-xs text-gray-400 mt-2">
                Order will be placed for Table {tableNo}
              </p>
            )}
          </>
        )}
      </main>

      {/* Floating home button */}
      <nav className="bottom-nav">
        <button className="bottom-nav-item" onClick={goHome} aria-label="Home">
          <span className="text-xl">🏠</span>
        </button>
        <button className="bottom-nav-item" onClick={goMenu} aria-label="Menu">
          <span className="text-xl">🍽️</span>
        </button>
        <button className="bottom-nav-item active" aria-label="Cart">
          <span className="text-xl">🛒</span>
        </button>
      </nav>
    </div>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Loading cart...</div>}>
      <CartContent />
    </Suspense>
  );
}
