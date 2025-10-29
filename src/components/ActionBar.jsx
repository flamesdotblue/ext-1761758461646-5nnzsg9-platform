import React, { useState } from 'react';

export default function ActionBar() {
  const [bet, setBet] = useState(8);
  const min = 2;
  const max = 240;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40">
      <div className="mx-auto max-w-6xl px-2 sm:px-6 pb-4">
        <div className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur shadow-2xl shadow-black/40">
          <div className="p-3 sm:p-4 grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 items-center">
            {/* Fold */}
            <button className="col-span-1 px-3 sm:px-4 py-3 rounded-xl bg-gradient-to-b from-rose-700 to-rose-800 text-white font-semibold border border-rose-400/30 shadow hover:brightness-110 active:translate-y-[1px] text-sm sm:text-base">Fold</button>

            {/* Check / Call */}
            <button className="col-span-1 px-3 sm:px-4 py-3 rounded-xl bg-gradient-to-b from-slate-700 to-slate-800 text-white font-semibold border border-slate-400/30 shadow hover:brightness-110 active:translate-y-[1px] text-sm sm:text-base">Check / Call</button>

            {/* Bet / Raise */}
            <button className="col-span-1 px-3 sm:px-4 py-3 rounded-xl bg-gradient-to-b from-emerald-600 to-emerald-700 text-white font-semibold border border-emerald-400/40 shadow hover:brightness-110 active:translate-y-[1px] text-sm sm:text-base">Bet / Raise</button>

            {/* Slider */}
            <div className="col-span-3 sm:col-span-2 flex items-center gap-3">
              <div className="hidden sm:block text-xs text-slate-300 w-14">{min.toFixed(0)}</div>
              <input
                type="range"
                min={min}
                max={max}
                value={bet}
                onChange={(e) => setBet(Number(e.target.value))}
                className="flex-1 accent-emerald-500"
              />
              <div className="hidden sm:block text-xs text-slate-300 w-14 text-right">{max.toFixed(0)}</div>
            </div>
          </div>

          <div className="px-3 sm:px-4 pb-3 sm:pb-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <Preset onClick={() => setBet(Math.max(min, Math.floor(max * 0.25)))}>1/4</Preset>
                <Preset onClick={() => setBet(Math.max(min, Math.floor(max * 0.5)))}>1/2</Preset>
                <Preset onClick={() => setBet(Math.max(min, Math.floor(max * 0.75)))}>3/4</Preset>
                <Preset onClick={() => setBet(max)}>Pot</Preset>
                <Preset onClick={() => setBet(min)}>Min</Preset>
                <Preset onClick={() => setBet((v) => Math.min(max, (typeof v === 'number' ? v : bet) + 2))}>+2</Preset>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Bet Size</div>
                <div className="text-lg font-semibold text-emerald-200">{typeof bet === 'number' ? bet.toFixed(2) : bet}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Preset({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2.5 py-1.5 rounded-lg bg-slate-800 border border-white/10 text-xs text-slate-200 hover:bg-slate-700 active:translate-y-[1px]"
    >
      {children}
    </button>
  );
}
