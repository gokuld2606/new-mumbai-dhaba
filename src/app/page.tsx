'use client';

import { useState, useEffect } from 'react';
import { menuData } from '@/data/menu';
import CategoryTabs from './components/CategoryTabs';
import CategoryPanel from './components/CategoryPanel';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Header from './components/Header';
import Footer from './components/Footer';

export default function HomePage() {
  const [activeId, setActiveId] = useState(menuData[0].id);
  const [filter, setFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [search, setSearch] = useState('');

  const visibleCategories = menuData.filter(
    (c) => filter === 'all' || c.type === filter || c.type === 'both'
  );

  // When filter changes, reset active to first visible
  useEffect(() => {
    if (visibleCategories.length > 0) {
      const stillVisible = visibleCategories.find((c) => c.id === activeId);
      if (!stillVisible) setActiveId(visibleCategories[0].id);
    }
  }, [filter]);

  const activeCategory = menuData.find((c) => c.id === activeId);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="max-w-5xl mx-auto w-full px-4 py-6">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {search.trim() ? (
        <main className="max-w-5xl mx-auto w-full px-4 pb-12">
          <SearchResults query={search} />
        </main>
      ) : (
        <>
          <CategoryTabs
            categories={menuData}
            activeId={activeId}
            filter={filter}
            onSelectCategory={setActiveId}
            onFilterChange={setFilter}
          />

          <main className="max-w-5xl mx-auto w-full px-4 py-8 flex-1">
            {activeCategory ? (
              <CategoryPanel key={activeCategory.id} category={activeCategory} />
            ) : (
              <p className="text-center text-gray-400 py-16">
                No categories match the current filter.
              </p>
            )}
          </main>
        </>
      )}

      <Footer />
    </div>
  );
}
