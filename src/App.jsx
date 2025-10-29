import React from 'react';
import PokerTable from './components/PokerTable.jsx';
import ActionBar from './components/ActionBar.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-inter relative">
      <header className="px-4 sm:px-6 py-3 border-b border-white/5 sticky top-0 z-30 backdrop-blur bg-slate-900/60">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-emerald-400" />
            </div>
            <div className="leading-tight">
              <div className="text-sm text-slate-300">Texas Hold'em</div>
              <div className="text-xs text-slate-400">No Limit • 9 Max</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400">
            <div className="px-2 py-1 rounded bg-white/5">Blinds: 1 / 2</div>
            <div className="px-2 py-1 rounded bg-white/5">Ante: 0</div>
            <div className="px-2 py-1 rounded bg-white/5">Players: 6/9</div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-2 sm:px-6 pt-4 pb-36">
        <PokerTable />
      </main>

      <ActionBar />
    </div>
  );
}
