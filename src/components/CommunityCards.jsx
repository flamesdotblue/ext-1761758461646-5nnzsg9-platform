import React from 'react';

function Card({ rank = 'A', suit = '♠', hidden = false, size = 'md' }) {
  const isRed = suit === '♥' || suit === '♦';
  const sizes = {
    sm: { w: 'w-10', h: 'h-14', text: 'text-[10px]' },
    md: { w: 'w-12 sm:w-16', h: 'h-16 sm:h-24', text: 'text-xs sm:text-base' },
    lg: { w: 'w-16', h: 'h-24', text: 'text-base' },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div className={`${s.w} ${s.h} rounded-md sm:rounded-lg bg-white shadow-lg border border-slate-200 relative select-none`}>\
      <div className={`absolute inset-0 rounded-md sm:rounded-lg ${hidden ? 'bg-slate-300 bg-[radial-gradient(circle_at_30%_30%,#e2e8f0,transparent_60%)]' : ''}`} />
      {!hidden && (
        <div className={`absolute inset-0 p-1 sm:p-2 flex flex-col justify-between ${s.text}`}>
          <div className={`font-semibold ${isRed ? 'text-rose-600' : 'text-slate-700'}`}>{rank}</div>
          <div className={`self-center text-xl sm:text-3xl ${isRed ? 'text-rose-600' : 'text-slate-700'}`}>{suit}</div>
          <div className={`self-end rotate-180 font-semibold ${isRed ? 'text-rose-600' : 'text-slate-700'}`}>{rank}</div>
        </div>
      )}
    </div>
  );
}

export default function CommunityCards({ cards = [] }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 px-2 py-2 rounded-xl bg-emerald-950/40 border border-emerald-400/20 backdrop-blur">
      {cards.slice(0, 5).map((c, idx) => (
        <Card key={idx} rank={c.rank} suit={c.suit} size="md" />
      ))}
    </div>
  );
}

export { Card };
