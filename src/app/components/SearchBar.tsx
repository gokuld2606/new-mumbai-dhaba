'use client';

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative max-w-md mx-auto">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search dishes, e.g. biryani, paneer..."
        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-orange-100 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron text-sm text-charcoal placeholder-gray-400 transition"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
        >
          ✕
        </button>
      )}
    </div>
  );
}
