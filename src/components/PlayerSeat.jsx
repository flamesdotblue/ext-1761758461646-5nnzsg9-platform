import React from 'react';
import ChipStack from './ChipStack.jsx';
import { Card } from './CommunityCards.jsx';

export default function PlayerSeat({ name, stack, isYou, status, bet = 0, dealer, sb, bb, cards = [], align = 'center' }) {
  const statusText = status === 'folded' ? 'Folded' : 'Thinking…';
  const isFolded = status === 'folded';

  const alignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align];

  return (
    <div className={`flex flex-col ${alignClasses} gap-1 sm:gap-1.5 min-w-[120px]`}>
      {/* Bet in front of player */}
      {bet > 0 && (
        <div className="-mb-1 flex items-center gap-1 text-amber-100/90">
          <ChipStack amount={bet} size="xs" />
          <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-400/20">{bet.toFixed(2)}</span>
        </div>
      )}

      {/* Cards (only for hero in this demo) */}
      {isYou && (
        <div className="flex items-center gap-1 sm:gap-2">
          <Card rank={cards[0]?.rank} suit={cards[0]?.suit} size="md" />
          <Card rank={cards[1]?.rank} suit={cards[1]?.suit} size="md" />
        </div>
      )}

      {/* Player plate */}
      <div className={`px-2.5 py-2 rounded-xl border backdrop-blur shadow ${isYou ? 'bg-emerald-900/50 border-emerald-400/30' : 'bg-slate-900/40 border-white/10'} ${isFolded ? 'opacity-60' : ''}`}>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10" />
            {dealer && (
              <div className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full bg-yellow-300 text-[10px] font-bold text-slate-900 flex items-center justify-center border border-yellow-500 shadow">D</div>
            )}
            {sb && (
              <div className="absolute -left-1 -bottom-1 h-4 w-4 rounded-full bg-cyan-300 text-[10px] font-bold text-slate-900 flex items-center justify-center border border-cyan-500 shadow">S</div>
            )}
            {bb && (
              <div className="absolute -left-1 -top-1 h-4 w-4 rounded-full bg-blue-400 text-[10px] font-bold text-white flex items-center justify-center border border-blue-500 shadow">B</div>
            )}
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-medium truncate max-w-[120px] sm:max-w-[160px]">{name}{isYou ? ' (You)' : ''}</div>
            <div className="text-[10px] sm:text-xs text-slate-400 truncate">{isFolded ? 'Folded' : statusText}</div>
          </div>
          <div className="ml-auto text-right">
            <div className="text-xs sm:text-sm font-semibold text-emerald-200">{stack.toFixed(2)}</div>
            <div className="text-[10px] sm:text-[11px] text-slate-400">chips</div>
          </div>
        </div>
      </div>
    </div>
  );
}
