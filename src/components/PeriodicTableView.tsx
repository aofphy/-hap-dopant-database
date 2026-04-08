import { periodicTableLayout } from '../data/periodicTable'
import { dopantMap, PURE_HAP_K, type Dopant } from '../data/dopants'

interface Props {
  selectedDopant: Dopant | null
  onSelectDopant: (d: Dopant | null) => void
}

function getDeltaKColor(deltaK: number): string {
  // Enhanced blue → white → red color scale
  if (deltaK > 3) return 'bg-[#8b2500] text-white'
  if (deltaK > 2) return 'bg-[#c96442] text-white'
  if (deltaK > 1) return 'bg-[#d97757] text-white'
  if (deltaK > 0) return 'bg-[#e8a88a] text-near-black'
  if (deltaK > -1) return 'bg-[#f0eee6] text-near-black'
  if (deltaK > -2) return 'bg-[#c5d5e4] text-near-black'
  if (deltaK > -4) return 'bg-[#8aacc8] text-white'
  return 'bg-[#4a7fa5] text-white'
}

export function PeriodicTableView({ selectedDopant, onSelectDopant }: Props) {
  const maxRow = 9
  const maxCol = 17

  return (
    <section id="screening" className="bg-near-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-coral text-sm font-medium tracking-wider uppercase mb-3 text-center">
          Screening Results
        </p>
        <h2 className="font-serif text-3xl md:text-[42px] font-medium text-ivory leading-tight text-center mb-3">
          Periodic Table of HAp Dopants
        </h2>
        <p className="text-warm-silver text-center max-w-2xl mx-auto mb-10">
          Predicted bulk modulus change (&#916;K%) for Ca<sup className="text-warm-silver">2+</sup> substitution at 10 mol%.
          Click an element to see details.
        </p>

        {/* Color legend */}
        <div className="flex items-center justify-center gap-2 mb-8 text-xs text-warm-silver">
          <span>Weakening</span>
          <div className="flex">
            <div className="w-6 h-4 bg-[#4a7fa5] rounded-l" />
            <div className="w-6 h-4 bg-[#8aacc8]" />
            <div className="w-6 h-4 bg-[#c5d5e4]" />
            <div className="w-6 h-4 bg-[#f0eee6]" />
            <div className="w-6 h-4 bg-[#e8a88a]" />
            <div className="w-6 h-4 bg-[#d97757]" />
            <div className="w-6 h-4 bg-[#c96442]" />
            <div className="w-6 h-4 bg-[#8b2500] rounded-r" />
          </div>
          <span>Strengthening</span>
        </div>

        {/* Periodic table grid */}
        <div className="overflow-x-auto pb-4">
          <div
            className="mx-auto"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${maxCol + 1}, minmax(42px, 1fr))`,
              gridTemplateRows: `repeat(${maxRow + 1}, auto)`,
              gap: '3px',
              maxWidth: '900px',
            }}
          >
            {periodicTableLayout.map(el => {
              const dopant = dopantMap.get(el.symbol)
              const isScreened = !!dopant
              const isSelected = selectedDopant?.element === el.symbol
              const isCa = el.symbol === 'Ca'

              const colorClass = dopant
                ? getDeltaKColor(dopant.deltaK)
                : 'bg-dark-surface/60 text-stone-gray'

              return (
                <button
                  key={el.symbol}
                  onClick={() => dopant && onSelectDopant(isSelected ? null : dopant)}
                  disabled={!isScreened}
                  className={`
                    relative rounded-md p-1 text-center transition-all min-h-[48px]
                    ${colorClass}
                    ${isScreened ? 'cursor-pointer hover:scale-110 hover:z-10' : 'cursor-default opacity-40'}
                    ${isSelected ? 'ring-2 ring-ivory scale-110 z-10' : ''}
                    ${isCa ? 'ring-2 ring-coral/60' : ''}
                  `}
                  style={{
                    gridRow: el.row + 1,
                    gridColumn: el.col + 1,
                  }}
                  title={dopant ? `${el.name}: K=${dopant.K.toFixed(1)} GPa (${dopant.deltaK > 0 ? '+' : ''}${dopant.deltaK.toFixed(1)}%)` : el.name}
                >
                  <div className="text-[9px] opacity-70 leading-none">{el.atomicNumber}</div>
                  <div className="text-sm font-bold leading-none mt-0.5">{el.symbol}</div>
                  {dopant && (
                    <div className="text-[8px] leading-none mt-0.5 opacity-80">
                      {dopant.deltaK > 0 ? '+' : ''}{dopant.deltaK.toFixed(1)}%
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected element detail card */}
        {selectedDopant && (
          <div className="mt-8 max-w-lg mx-auto bg-dark-surface rounded-2xl border border-dark-surface p-6 shadow-[rgba(0,0,0,0.3)_0px_4px_24px]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-coral text-xs font-medium uppercase tracking-wider">Selected Dopant</span>
                <h3 className="font-serif text-3xl font-medium text-ivory mt-1">
                  {selectedDopant.element}<sup className="text-lg text-warm-silver">{selectedDopant.charge}+</sup>
                </h3>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedDopant.toxicity === 'Low' ? 'bg-green-900/40 text-green-300' :
                selectedDopant.toxicity === 'Moderate' ? 'bg-yellow-900/40 text-yellow-300' :
                'bg-red-900/40 text-red-300'
              }`}>
                {selectedDopant.toxicity} toxicity
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-stone-gray">Bulk Modulus</div>
                <div className="text-ivory font-medium text-lg">{selectedDopant.K.toFixed(2)} GPa</div>
              </div>
              <div>
                <div className="text-stone-gray">Change vs Pure HAp</div>
                <div className={`font-medium text-lg ${selectedDopant.deltaK >= 0 ? 'text-coral' : 'text-[#8aacc8]'}`}>
                  {selectedDopant.deltaK > 0 ? '+' : ''}{selectedDopant.deltaK.toFixed(2)}%
                </div>
              </div>
              <div>
                <div className="text-stone-gray">Ionic Radius</div>
                <div className="text-ivory font-medium">{selectedDopant.ionicRadius.toFixed(2)} A</div>
              </div>
              <div>
                <div className="text-stone-gray">Group</div>
                <div className="text-ivory font-medium">{selectedDopant.group}</div>
              </div>
              <div>
                <div className="text-stone-gray">Screening Rank</div>
                <div className="text-ivory font-medium">#{selectedDopant.rank} / 59</div>
              </div>
              <div>
                <div className="text-stone-gray">Pure HAp Reference</div>
                <div className="text-ivory font-medium">{PURE_HAP_K.toFixed(2)} GPa</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
