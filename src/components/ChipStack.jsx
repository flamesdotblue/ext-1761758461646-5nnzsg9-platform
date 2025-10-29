import React from 'react';

export default function ChipStack({ amount = 0, size = 'sm' }) {
  const sizes = {
    xs: { chip: 'h-2.5 w-2.5', gap: '-space-y-1', text: 'text-[10px]' },
    sm: { chip: 'h-3 w-3', gap: '-space-y-1.5', text: 'text-[11px]' },
    md: { chip: 'h-4 w-4', gap: '-space-y-2', text: 'text-xs' },
  };
  const s = sizes[size] || sizes.sm;

  const chips = [
    { color: 'bg-rose-500 border-rose-300', value: 5 },
    { color: 'bg-blue-500 border-blue-300', value: 10 },
    { color: 'bg-emerald-500 border-emerald-300', value: 25 },
  ];

  return (
    <div className="flex items-end gap-1">
      {chips.map((c, idx) => (
        <div key={idx} className={`flex flex-col ${s.gap} items-center`}>
          <div className={`${s.chip} rounded-full ${c.color} border`}></div>
          <div className={`${s.chip} rounded-full ${c.color} border`}></div>
          <div className={`${s.chip} rounded-full ${c.color} border`}></div>
        </div>
      ))}
      <span className={`${s.text} text-amber-100/90 ml-1`}>{amount.toFixed ? amount.toFixed(2) : amount}</span>
    </div>
  );
}
