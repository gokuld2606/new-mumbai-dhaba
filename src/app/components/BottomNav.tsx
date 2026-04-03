'use client';

type NavItem = {
  icon: string;
  label: string;
  id: string;
};

const navItems: NavItem[] = [
  { icon: '🏠', label: 'Home',   id: 'home'   },
  { icon: '🍽️', label: 'Menu',   id: 'menu'   },
  { icon: '🔍', label: 'Search', id: 'search' },
  { icon: 'ℹ️', label: 'Info',   id: 'info'   },
];

type Props = {
  active: string;
  onSelect: (id: string) => void;
};

export default function BottomNav({ active, onSelect }: Props) {
  return (
    <nav className="bottom-nav md:hidden">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`bottom-nav-item ${active === item.id ? 'active' : ''}`}
          aria-label={item.label}
        >
          <span className="text-xl leading-none">{item.icon}</span>
          <span className="nav-dot" />
        </button>
      ))}
    </nav>
  );
}
