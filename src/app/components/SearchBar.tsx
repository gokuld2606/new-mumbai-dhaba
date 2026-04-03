'use client';

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative max-w-md mx-auto search-input">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">🔍</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search dishes, e.g. biryani, paneer..."
        className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-transparent focus:outline-none text-sm placeholder-gray-400"
        style={{ color: '#1C0A00', fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      )}
    </div>
  );
}
