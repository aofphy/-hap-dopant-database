import { useState, useMemo } from 'react'
import { dopants, dopantMap, PURE_HAP_K, PURE_HAP_K_DFT, coDopingData, computeBFoM, dftElasticMap, type Dopant } from '../data/dopants'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine, ScatterChart, Scatter, ZAxis } from 'recharts'

interface Props {
  selectedDopant: Dopant | null
  onSelectDopant: (d: Dopant | null) => void
}

// Simple concentration-dependent model (linear interpolation inspired by paper)
function predictKAtConcentration(baseK: number, concentration: number): number {
  // At 10% this is the baseK; extrapolate linearly (simplified)
  const deltaPerPercent = (baseK - PURE_HAP_K) / 10
  return PURE_HAP_K + deltaPerPercent * concentration
}

export function PredictionTool({ selectedDopant, onSelectDopant }: Props) {
  const [element1, setElement1] = useState(selectedDopant?.element || 'Sr')
  const [concentration, setConcentration] = useState(10)
  const [tab, setTab] = useState<'single' | 'compare' | 'codoping'>('single')

  const dopant1 = dopantMap.get(element1)

  // Single dopant prediction
  const singlePrediction = useMemo(() => {
    if (!dopant1) return null
    const K = predictKAtConcentration(dopant1.K, concentration)
    const deltaK = ((K - PURE_HAP_K) / PURE_HAP_K) * 100
    // ML formation energy and band gap are the 10 mol% screening values (paper Eq. 5 inputs)
    const dEForm = dopant1.dEForm
    const Eg = dopant1.eGap
    const bfom = computeBFoM(K, dEForm, Eg, dopant1.toxicity)
    const dft = dftElasticMap.get(dopant1.element) ?? null
    return { K, deltaK, dEForm, Eg, bfom, dft }
  }, [dopant1, concentration])

  // Bar chart data for group comparison
  const groupChartData = useMemo(() => {
    return dopants
      .filter(d => d.element !== 'Ca')
      .slice(0, 20)
      .map(d => ({
        element: d.element,
        K: d.K,
        deltaK: d.deltaK,
        group: d.group,
      }))
  }, [])

  // Scatter data: ionic radius vs K
  const scatterData = useMemo(() => {
    return dopants.filter(d => d.element !== 'Ca').map(d => ({
      x: d.ionicRadius,
      y: d.K,
      element: d.element,
      group: d.group,
      z: d.charge,
    }))
  }, [])

  const groupColors: Record<string, string> = {
    'Alkali': '#4a7fa5',
    'Alkaline Earth': '#6aaa64',
    '3d TM': '#c96442',
    '4d TM': '#d97757',
    '5d TM': '#e8a88a',
    'Lanthanide': '#8b6bb5',
    'Post-TM': '#87867f',
  }

  return (
    <section id="predict" className="bg-near-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-coral text-sm font-medium tracking-wider uppercase mb-3 text-center">
          Interactive Tool
        </p>
        <h2 className="font-serif text-3xl md:text-[42px] font-medium text-ivory leading-tight text-center mb-3">
          Dopant Property Predictor
        </h2>
        <p className="text-warm-silver text-center max-w-2xl mx-auto mb-10">
          Select a dopant element and concentration to predict mechanical properties,
          thermodynamic stability, and biomedical figure of merit for doped HAp.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {(['single', 'compare', 'codoping'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                tab === t
                  ? 'bg-terracotta text-ivory shadow-[0px_0px_0px_1px_#c96442]'
                  : 'bg-dark-surface text-warm-silver hover:text-ivory'
              }`}
            >
              {t === 'single' ? 'Single Dopant' : t === 'compare' ? 'Compare Top 20' : 'Co-doping'}
            </button>
          ))}
        </div>

        {tab === 'single' && (
          <div className="grid md:grid-cols-[340px_1fr] gap-8">
            {/* Controls */}
            <div className="bg-dark-surface rounded-2xl border border-dark-surface p-6 space-y-6">
              <div>
                <label className="text-stone-gray text-sm block mb-2">Dopant Element</label>
                <select
                  value={element1}
                  onChange={e => { setElement1(e.target.value); const d = dopantMap.get(e.target.value); if (d) onSelectDopant(d); }}
                  className="w-full bg-near-black text-ivory border border-dark-surface rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-terracotta/50"
                >
                  {dopants.filter(d => d.element !== 'Ca').map(d => (
                    <option key={d.element} value={d.element}>
                      {d.element} — {d.group} ({d.deltaK > 0 ? '+' : ''}{d.deltaK.toFixed(1)}%)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-stone-gray text-sm block mb-2">
                  Concentration: {concentration} mol%
                </label>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={concentration}
                  onChange={e => setConcentration(Number(e.target.value))}
                  className="w-full accent-terracotta"
                />
                <div className="flex justify-between text-xs text-stone-gray mt-1">
                  <span>1%</span><span>25%</span><span>50%</span>
                </div>
              </div>

              {dopant1 && singlePrediction && (
                <div className="space-y-4 pt-4 border-t border-near-black">
                  <h3 className="font-serif text-xl text-ivory">
                    Ca<sub className="text-warm-silver">{10 - Math.round(concentration / 10)}</sub>{element1}<sub className="text-warm-silver">{Math.round(concentration / 10)}</sub>(PO<sub>4</sub>)<sub>6</sub>(OH)<sub>2</sub>
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <ResultCard label="Bulk Modulus" value={`${singlePrediction.K.toFixed(1)} GPa`} />
                    <ResultCard
                      label="Change"
                      value={`${singlePrediction.deltaK > 0 ? '+' : ''}${singlePrediction.deltaK.toFixed(2)}%`}
                      highlight={singlePrediction.deltaK >= 0}
                    />
                    <ResultCard label="|\u0394E_form| vs host" value={`${singlePrediction.dEForm.toFixed(3)} eV/atom`} />
                    <ResultCard label="Band Gap (ML)" value={`${singlePrediction.Eg.toFixed(2)} eV`} />
                    <ResultCard label="Ionic Radius" value={`${dopant1.ionicRadius} \u00C5`} />
                    <ResultCard label="Charge" value={`+${dopant1.charge}`} />
                  </div>

                  <div className="bg-near-black rounded-xl p-4">
                    <div className="text-stone-gray text-xs mb-1">Biomedical Figure of Merit</div>
                    <div className="flex items-end gap-2">
                      <span className="font-serif text-3xl text-coral font-medium">
                        {singlePrediction.bfom.toFixed(3)}
                      </span>
                      <span className="text-stone-gray text-xs mb-1">
                        / 1.000 (host){dopant1.bfomRank !== null && concentration === 10 ? ` \u00B7 rank ${dopant1.bfomRank} of 58` : ''}
                      </span>
                    </div>
                    <div className="mt-2 h-2 bg-dark-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-terracotta to-coral rounded-full transition-all"
                        style={{ width: `${Math.min(100, singlePrediction.bfom * 100)}%` }}
                      />
                    </div>
                    <p className="text-stone-gray text-xs mt-2">
                      Combines mechanical enhancement, thermodynamic compatibility, electronic structure, and toxicity (paper Eq. 5).
                    </p>
                  </div>

                  <div className="bg-near-black rounded-xl p-4 text-xs leading-relaxed">
                    <div className="text-stone-gray mb-1">DFT check (10 mol%, 44-atom cell)</div>
                    {singlePrediction.dft ? (
                      <p className="text-warm-silver">
                        K<sub>DFT</sub> = <span className="text-coral font-medium">{singlePrediction.dft.K_DFT.toFixed(1)} GPa</span> at the {singlePrediction.dft.site} site
                        vs {PURE_HAP_K_DFT.toFixed(1)} GPa for undoped HAp
                        ({singlePrediction.dft.K_DFT - PURE_HAP_K_DFT > -0.45 ? 'host stiffness preserved' : `softens by ${(PURE_HAP_K_DFT - singlePrediction.dft.K_DFT).toFixed(1)} GPa`}).
                        ML overpredicts by {(singlePrediction.dft.K_ML - singlePrediction.dft.K_DFT).toFixed(1)} GPa.
                      </p>
                    ) : (
                      <p className="text-stone-gray">
                        No DFT elastic tensor for this dopant. The ML bulk modulus above is not confirmed:
                        DFT shows none of the ten dopants tested stiffens HAp, and ML overpredicts by 26.9 &plusmn; 3.1 GPa.
                      </p>
                    )}
                  </div>

                  <div className={`text-xs px-3 py-2 rounded-lg ${
                    dopant1.toxicity === 'Low' ? 'bg-green-900/30 text-green-300' :
                    dopant1.toxicity === 'Moderate' ? 'bg-yellow-900/30 text-yellow-300' :
                    'bg-red-900/30 text-red-300'
                  }`}>
                    Toxicity: {dopant1.toxicity}
                    {dopant1.toxicity === 'Low' && ' — Suitable for biomedical applications'}
                    {dopant1.toxicity === 'Moderate' && ' — Use with caution; limited biomedical use'}
                    {dopant1.toxicity === 'High' && ' — Not recommended for biomedical applications'}
                  </div>
                </div>
              )}
            </div>

            {/* Chart: ionic radius vs K scatter */}
            <div className="bg-dark-surface rounded-2xl border border-dark-surface p-6">
              <h3 className="font-serif text-lg text-ivory mb-1">Ionic Radius vs. Bulk Modulus</h3>
              <p className="text-stone-gray text-xs mb-4">
                ML predictions; correlation r = &minus;0.46. Selected element highlighted.
              </p>
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart margin={{ top: 10, right: 20, bottom: 20, left: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#30302e" />
                  <XAxis
                    dataKey="x" type="number" name="Ionic Radius"
                    label={{ value: 'Ionic Radius (\u00C5)', position: 'bottom', fill: '#87867f', fontSize: 12 }}
                    stroke="#5e5d59" tick={{ fill: '#87867f', fontSize: 11 }}
                  />
                  <YAxis
                    dataKey="y" type="number" name="K (GPa)"
                    label={{ value: 'Bulk Modulus (GPa)', angle: -90, position: 'insideLeft', fill: '#87867f', fontSize: 12 }}
                    stroke="#5e5d59" tick={{ fill: '#87867f', fontSize: 11 }}
                    domain={[93, 108]}
                  />
                  <ZAxis dataKey="z" range={[40, 120]} />
                  <Tooltip
                    content={({ payload }) => {
                      if (!payload?.length) return null
                      const d = payload[0].payload
                      return (
                        <div className="bg-near-black text-ivory text-xs p-2 rounded-lg border border-dark-surface">
                          <strong>{d.element}</strong> ({d.group})<br />
                          K = {d.y.toFixed(1)} GPa, r = {d.x.toFixed(2)} A
                        </div>
                      )
                    }}
                  />
                  <Scatter data={scatterData}>
                    {scatterData.map((d, i) => (
                      <Cell
                        key={i}
                        fill={d.element === element1 ? '#c96442' : (groupColors[d.group] || '#87867f')}
                        stroke={d.element === element1 ? '#faf9f5' : 'none'}
                        strokeWidth={d.element === element1 ? 2 : 0}
                        r={d.element === element1 ? 8 : 4}
                      />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>

              {/* Legend */}
              <div className="flex flex-wrap gap-3 mt-4 justify-center">
                {Object.entries(groupColors).map(([g, c]) => (
                  <span key={g} className="flex items-center gap-1 text-xs text-warm-silver">
                    <span className="w-3 h-3 rounded-full inline-block" style={{ background: c }} />
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'compare' && (
          <div className="bg-dark-surface rounded-2xl border border-dark-surface p-6">
            <h3 className="font-serif text-lg text-ivory mb-1">Top 20 Dopants by Bulk Modulus</h3>
            <p className="text-stone-gray text-xs mb-4">
              ML-predicted change relative to pure HAp (102.92 GPa). DFT elastic tensors do not confirm this ordering:
              none of the ten dopants tested (incl. Ti, Zr, Cr) stiffens HAp at 10 mol%.
            </p>
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={groupChartData} margin={{ top: 10, right: 20, bottom: 20, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#30302e" />
                <XAxis
                  dataKey="element" stroke="#5e5d59"
                  tick={{ fill: '#b0aea5', fontSize: 12 }}
                />
                <YAxis
                  stroke="#5e5d59" tick={{ fill: '#87867f', fontSize: 11 }}
                  label={{ value: '\u0394K (%)', angle: -90, position: 'insideLeft', fill: '#87867f', fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{ background: '#141413', border: '1px solid #30302e', borderRadius: 8 }}
                  labelStyle={{ color: '#faf9f5' }}
                  itemStyle={{ color: '#d97757' }}
                  formatter={(v) => [`${Number(v) > 0 ? '+' : ''}${Number(v).toFixed(2)}%`, '\u0394K']}
                />
                <ReferenceLine y={0} stroke="#5e5d59" strokeDasharray="4 4" />
                <Bar dataKey="deltaK" radius={[4, 4, 0, 0]}>
                  {groupChartData.map((d, i) => (
                    <Cell key={i} fill={groupColors[d.group] || '#87867f'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {tab === 'codoping' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-dark-surface rounded-2xl border border-dark-surface p-6">
              <h3 className="font-serif text-xl text-ivory mb-2">Co-doping Predictions</h3>
              <p className="text-stone-gray text-sm mb-6">
                Linear mixing approximation for Ca<sub>8</sub>M<sub>1</sub>N<sub>1</sub>(PO<sub>4</sub>)<sub>6</sub>(OH)<sub>2</sub> systems.
                Synergistic or antagonistic effects may not be captured.
              </p>
              <div className="space-y-4">
                {coDopingData.map(cd => (
                  <div key={cd.system} className="bg-near-black rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <div className="font-serif text-lg text-ivory">{cd.system}</div>
                      <div className="text-coral text-sm font-medium">{cd.role}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="text-stone-gray text-xs">K (GPa)</div>
                        <div className="text-ivory font-medium">{cd.K.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-stone-gray text-xs">|&Delta;E<sub>form</sub>|</div>
                        <div className="text-ivory font-medium">{cd.dEForm.toFixed(2)}</div>
                      </div>
                      <div>
                        <div className="text-stone-gray text-xs">BFoM</div>
                        <div className="text-coral font-medium">{cd.BFoM.toFixed(3)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-near-black rounded-xl p-4 text-stone-gray text-xs leading-relaxed">
                <strong className="text-warm-silver">Design guidance:</strong> Sr-Mg co-doping (BFoM = 1.001) is recommended
                for combined thermodynamic compatibility and preserved stiffness. Sr-Zn (BFoM = 0.882) adds antibacterial functionality.
                For Sr-Mg and Sr-Zn, DFT elastic tensors agree with linear mixing of the single-dopant DFT shifts to within 2 GPa.
                Explicit DFT calculations are recommended before synthesis of other pairs.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function ResultCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="bg-near-black rounded-lg p-3">
      <div className="text-stone-gray text-xs">{label}</div>
      <div className={`font-medium text-sm mt-0.5 ${highlight === true ? 'text-coral' : highlight === false ? 'text-[#8aacc8]' : 'text-ivory'}`}>
        {value}
      </div>
    </div>
  )
}
