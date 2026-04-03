'use client';

import { useState } from 'react';

export default function QRPage() {
  const [baseUrl, setBaseUrl] = useState('https://your-domain.vercel.app');
  const [tableCount, setTableCount] = useState(10);

  const tables = Array.from({ length: tableCount }, (_, i) => i + 1);

  const qrUrl = (table: number) =>
    `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`${baseUrl}/?table=${table}`)}`;

  return (
    <div className="min-h-screen p-6" style={{ background: '#FFF5E4' }}>
      <div className="max-w-4xl mx-auto">
        <div className="h-1 rounded-full mb-6"
          style={{ background: 'linear-gradient(90deg,#F5871F,#FFCD00,#C8102E)' }} />

        <h1 className="font-display text-3xl font-black mb-1" style={{ color: '#F5871F' }}>
          QR Code Generator
        </h1>
        <p className="text-sm text-gray-500 mb-6">Generate QR codes for each table. Print and place them on the tables.</p>

        {/* Settings */}
        <div className="rounded-2xl p-4 mb-6 bg-white" style={{ border: '1.5px solid rgba(245,135,31,0.2)' }}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Your Website URL</label>
              <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl text-sm font-semibold outline-none"
                style={{ border: '1.5px solid rgba(245,135,31,0.3)', color: '#1C0A00' }}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">No. of Tables</label>
              <input
                type="number"
                value={tableCount}
                min={1} max={50}
                onChange={(e) => setTableCount(Number(e.target.value))}
                className="w-24 px-3 py-2 rounded-xl text-sm font-semibold outline-none"
                style={{ border: '1.5px solid rgba(245,135,31,0.3)', color: '#1C0A00' }}
              />
            </div>
          </div>
        </div>

        {/* QR grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tables.map((t) => (
            <div key={t} className="bg-white rounded-2xl p-4 text-center"
              style={{ border: '1.5px solid rgba(245,135,31,0.18)', boxShadow: '0 2px 12px rgba(245,135,31,0.08)' }}>
              <p className="font-black text-sm mb-2" style={{ color: '#F5871F' }}>Table {t}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrUrl(t)} alt={`Table ${t} QR`} className="w-full rounded-xl" />
              <p className="text-xs text-gray-400 mt-2 break-all">{baseUrl}/?table={t}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          💡 Use Ctrl+P to print this page and cut out the QR codes for each table.
        </p>
      </div>
    </div>
  );
}
