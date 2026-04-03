'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { menuData } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import MenuItemRow from '../components/MenuItemRow';
import BottomNav from '../components/BottomNav';

type Filter = 'all' | 'veg' | 'nonveg';

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tableNo = searchParams.get('table');
  const { totalItems } = useCart();

  const [filter, setFilter] = useState<Filter>('all');
  const [activeId, setActiveId] = useState(menuData[0].id);
  const [search, setSearch] = useState('');

  const visibleCats = menuData.filter(
    (c) => filter === 'all' || c.type === filter || c.type === 'both'
  );

  useEffect(() => {
    const still = visibleCats.find((c) => c.id === activeId);
    if (!still && visibleCats.length > 0) setActiveId(visibleCats[0].id);
  }, [filter]);

  const activeCategory = menuData.find((c) => c.id === activeId);

  // flat search results
  const searchResults = search.trim()
    ? menuData.flatMap((cat) =>
        cat.sections.flatMap((sec) =>
          sec.items
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .map((item) => ({ ...item, catLabel: cat.label, secTitle: sec.title }))
        )
      )
    : [];

  const goCart = () => router.push(`/cart${tableNo ? `?table=${tableNo}` : ''}`);
  const goHome = () => router.push(`/${tableNo ? `?table=${tableNo}` : ''}`);

  return (
    <div className="min-h-screen flex flex-col" style={{ paddingBottom: 90 }}>

      {/* Top stripe */}
      <div className="h-1 flex-shrink-0"
        style={{ background: 'linear-gradient(90deg,#F5871F,#FFCD00,#C8102E,#F5871F)' }} />

      {/* Fixed top bar */}
      <div className="sticky top-0 z-40 sticky-tabs">
        <div className="max-w-2xl mx-auto px-3 pt-3 pb-2">

          {/* Row 1: Search + veg toggle + table badge */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl bg-white"
              style={{ border: '1.5px solid rgba(245,135,31,0.2)' }}>
              <span className="text-base">🔍</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search dishes..."
                className="flex-1 text-sm bg-transparent outline-none font-semibold"
                style={{ color: '#1C0A00' }}
              />
              {search && (
                <button onClick={() => setSearch('')} className="text-gray-400 text-sm">✕</button>
              )}
            </div>

            {/* Veg / Non-Veg toggle */}
            <div className="flex rounded-xl overflow-hidden border"
              style={{ borderColor: 'rgba(245,135,31,0.25)' }}>
              {(['all','veg','nonveg'] as Filter[]).map((f) => (
                <button key={f} onClick={() => setFilter(f)}
                  className="px-2.5 py-2 text-xs font-bold transition-all"
                  style={{
                    background: filter === f
                      ? f === 'veg' ? '#16a34a' : f === 'nonveg' ? '#b91c1c' : '#F5871F'
                      : 'white',
                    color: filter === f ? 'white' : '#666',
                  }}>
                  {f === 'all' ? 'All' : f === 'veg' ? '🟢' : '🔴'}
                </button>
              ))}
            </div>

            {/* Table badge */}
            {tableNo && (
              <div className="flex-shrink-0 px-2.5 py-2 rounded-xl text-xs font-bold"
                style={{ background: 'rgba(245,135,31,0.12)', color: '#F5871F', border: '1px solid rgba(245,135,31,0.3)' }}>
                🪑{tableNo}
              </div>
            )}
          </div>

          {/* Row 2: Category tabs */}
          {!search && (
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {visibleCats.map((cat) => (
                <button key={cat.id} onClick={() => setActiveId(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    activeId === cat.id ? 'tab-active' : 'bg-white text-gray-600'
                  }`}
                  style={activeId !== cat.id ? { border: '1.5px solid rgba(245,135,31,0.2)' } : {}}>
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-3 py-4">
        {search.trim() ? (
          <div>
            <p className="text-xs text-gray-500 font-semibold mb-3">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &quot;{search}&quot;
            </p>
            {searchResults.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <div className="text-4xl mb-2">🍽️</div>
                <p className="font-semibold">No dishes found</p>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {searchResults.map((item, i) => (
                  <div key={i}>
                    <p className="text-xs text-gray-400 px-1 mb-1">{item.catLabel} › {item.secTitle}</p>
                    <MenuItemRow name={item.name} price={typeof item.price === 'number' ? item.price : 0} tag={item.tag} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : activeCategory ? (
          <div className="animate-in">
            {/* Category header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">{activeCategory.emoji}</span>
              <h2 className="font-display text-xl font-bold" style={{ color: '#1C0A00' }}>
                {activeCategory.label}
              </h2>
            </div>

            {activeCategory.sections.map((section) => (
              <div key={section.title} className="mb-5">
                <div className="divider-ornament">
                  <span className="text-xs font-black tracking-widest uppercase" style={{ color: '#D96B0A' }}>
                    {section.title}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {section.items.map((item) => (
                    <MenuItemRow
                      key={item.name}
                      name={item.name}
                      price={typeof item.price === 'number' ? item.price : 0}
                      tag={item.tag}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </main>

      {/* Floating bottom nav */}
      <BottomNav active="menu" totalItems={totalItems} onHome={goHome} onCart={goCart} onReset={() => { setFilter('all'); setSearch(''); }} />
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Loading menu...</div>}>
      <MenuContent />
    </Suspense>
  );
}
