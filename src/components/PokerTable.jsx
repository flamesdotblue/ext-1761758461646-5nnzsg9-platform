import React from 'react';
import CommunityCards from './CommunityCards.jsx';
import PlayerSeat from './PlayerSeat.jsx';
import ChipStack from './ChipStack.jsx';

const demoPlayers = [
  { id: 1, name: 'You', stack: 245.5, isYou: true, status: 'active', bets: 4, cards: [{ rank: 'A', suit: '♠' }, { rank: 'K', suit: '♠' }], dealer: false, sb: false, bb: false },
  { id: 2, name: 'Riley', stack: 118.2, status: 'active', bets: 0, cards: [], dealer: true, sb: false, bb: false },
  { id: 3, name: 'Kai', stack: 73.0, status: 'active', bets: 2, cards: [], dealer: false, sb: true, bb: false },
  { id: 4, name: 'Mia', stack: 305.1, status: 'active', bets: 0, cards: [], dealer: false, sb: false, bb: true },
  { id: 5, name: 'Ava', stack: 55.8, status: 'folded', bets: 0, cards: [], dealer: false, sb: false, bb: false },
  { id: 6, name: 'Zen', stack: 190.0, status: 'active', bets: 0, cards: [], dealer: false, sb: false, bb: false },
];

const seatPositions = [
  { top: '78%', left: '50%', align: 'center' }, // bottom center (hero)
  { top: '62%', left: '85%', align: 'right' },
  { top: '28%', left: '85%', align: 'right' },
  { top: '6%', left: '50%', align: 'center' },
  { top: '28%', left: '15%', align: 'left' },
  { top: '62%', left: '15%', align: 'left' },
];

export default function PokerTable() {
  const pot = 12;
  const board = [
    { rank: 'Q', suit: '♥' },
    { rank: 'Q', suit: '♣' },
    { rank: '7', suit: '♠' },
    { rank: '2', suit: '♦' },
    { rank: 'K', suit: '♣' },
  ];

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/6] max-h-[72vh] min-h-[440px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[95%] h-[85%] max-w-[1100px]">
          {/* Felt backdrop */}
          <div className="absolute inset-0 rounded-[999px] bg-emerald-900/50 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] border border-emerald-600/40" />

          {/* Table oval */}
          <div className="absolute inset-[4%] rounded-[999px] bg-gradient-to-b from-emerald-700 to-emerald-800 border-4 border-emerald-900 shadow-2xl shadow-black/40" />

          {/* Betting line */}
          <div className="absolute inset-[8%] rounded-[999px] border-2 border-amber-200/20" />

          {/* Pot and board */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] sm:-translate-y-1/2 flex flex-col items-center gap-3">
            <CommunityCards cards={board} />
            <div className="flex items-center gap-2 text-xs text-amber-200/90">
              <ChipStack amount={pot} size="sm" />
              <span className="px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-400/20 text-amber-100/90">Pot: {pot.toFixed(2)}</span>
            </div>
          </div>

          {/* Players */}
          {demoPlayers.map((p, i) => {
            const pos = seatPositions[i % seatPositions.length];
            return (
              <div
                key={p.id}
                className="absolute"
                style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
              >
                <PlayerSeat
                  name={p.name}
                  stack={p.stack}
                  isYou={p.isYou}
                  status={p.status}
                  bet={p.bets}
                  dealer={p.dealer}
                  sb={p.sb}
                  bb={p.bb}
                  cards={p.isYou ? p.cards : []}
                  align={pos.align}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
