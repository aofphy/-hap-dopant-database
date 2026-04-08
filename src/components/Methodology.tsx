export function Methodology() {
  return (
    <section id="methodology" className="bg-parchment py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-terracotta text-sm font-medium tracking-wider uppercase mb-3 text-center">
          How It Works
        </p>
        <h2 className="font-serif text-3xl md:text-[42px] font-medium text-near-black leading-tight text-center mb-12">
          Transfer Learning Framework
        </h2>

        {/* Pipeline steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              step: '01',
              title: 'Training Data',
              desc: 'Random Forest models trained on AFLOW (1,181 compounds for bulk modulus) and MatBench (10,000 each for band gap and formation energy) databases.',
            },
            {
              step: '02',
              title: 'Feature Engineering',
              desc: '132-dimensional Matminer MAGPIE descriptors encoding elemental properties: electronegativity, ionic radius, valence configuration, melting temperature.',
            },
            {
              step: '03',
              title: 'Property Prediction',
              desc: 'Transfer learning predicts bulk modulus, band gap, and formation energy for Ca\u2089M(PO\u2084)\u2086(OH)\u2082 at 10 mol% substitution level.',
            },
          ].map(s => (
            <div key={s.step} className="bg-ivory rounded-2xl border border-border-cream p-6 shadow-[rgba(0,0,0,0.05)_0px_4px_24px]">
              <div className="text-terracotta font-serif text-4xl font-medium mb-3">{s.step}</div>
              <h3 className="font-serif text-xl font-medium text-near-black mb-2">{s.title}</h3>
              <p className="text-olive-gray text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Model performance */}
        <div className="bg-ivory rounded-2xl border border-border-cream p-8 shadow-[rgba(0,0,0,0.05)_0px_4px_24px] mb-12">
          <h3 className="font-serif text-2xl font-medium text-near-black mb-6">Model Performance</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border-warm text-left">
                  <th className="px-4 py-3 font-medium text-olive-gray">Property</th>
                  <th className="px-4 py-3 font-medium text-olive-gray">Training Database</th>
                  <th className="px-4 py-3 font-medium text-olive-gray">R<sup>2</sup></th>
                  <th className="px-4 py-3 font-medium text-olive-gray">95% CI</th>
                  <th className="px-4 py-3 font-medium text-olive-gray">MAE</th>
                  <th className="px-4 py-3 font-medium text-olive-gray">RMSE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { prop: 'Bulk Modulus (K)', db: 'AFLOW (1,181)', r2: '0.954 \u00B1 0.027', ci: '[0.881, 0.977]', mae: '8.2 \u00B1 0.9 GPa', rmse: '15.2 \u00B1 3.9 GPa' },
                  { prop: 'Band Gap (Eg)', db: 'MatBench (10,000)', r2: '0.833 \u00B1 0.015', ci: '[0.804, 0.860]', mae: '0.37 \u00B1 0.01 eV', rmse: '0.65 \u00B1 0.03 eV' },
                  { prop: 'Formation Energy', db: 'MatBench (10,000)', r2: '0.951 \u00B1 0.006', ci: '[0.937, 0.962]', mae: '0.14 \u00B1 0.01 eV/at', rmse: '0.26 \u00B1 0.02 eV/at' },
                ].map(r => (
                  <tr key={r.prop} className="border-b border-border-cream">
                    <td className="px-4 py-3 font-medium text-near-black">{r.prop}</td>
                    <td className="px-4 py-3 text-olive-gray">{r.db}</td>
                    <td className="px-4 py-3 font-mono text-terracotta font-medium">{r.r2}</td>
                    <td className="px-4 py-3 font-mono text-olive-gray">{r.ci}</td>
                    <td className="px-4 py-3 font-mono text-olive-gray">{r.mae}</td>
                    <td className="px-4 py-3 font-mono text-olive-gray">{r.rmse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-gray text-xs mt-4">
            Bootstrap uncertainty quantification with n=100 iterations.
            Random Forest selected for interpretability via SHAP analysis.
          </p>
        </div>

        {/* Key findings */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-ivory rounded-2xl border border-border-cream p-6 shadow-[rgba(0,0,0,0.05)_0px_4px_24px]">
            <h3 className="font-serif text-xl font-medium text-near-black mb-4">Key Findings</h3>
            <ul className="space-y-3 text-sm text-olive-gray">
              <li className="flex gap-2">
                <span className="text-terracotta font-bold mt-0.5">&#8226;</span>
                <span>Lu<sup>3+</sup>, Ti<sup>4+</sup>, Zr<sup>4+</sup> are top mechanical enhancers (+4.2%, +3.9%, +3.6%)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-terracotta font-bold mt-0.5">&#8226;</span>
                <span>Sr<sup>2+</sup>, Y<sup>3+</sup>, Sc<sup>3+</sup> ranked globally optimal by biomedical figure of merit</span>
              </li>
              <li className="flex gap-2">
                <span className="text-terracotta font-bold mt-0.5">&#8226;</span>
                <span>Electronegativity identified as universal descriptor across all three properties</span>
              </li>
              <li className="flex gap-2">
                <span className="text-terracotta font-bold mt-0.5">&#8226;</span>
                <span>Alkali metals (Na, K, Rb, Cs, Li) uniformly weaken the lattice (&minus;5 to &minus;8%)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-terracotta font-bold mt-0.5">&#8226;</span>
                <span>Optimal ionic radius range: 0.70&ndash;0.90 \u00C5 for mechanical enhancement</span>
              </li>
            </ul>
          </div>

          <div className="bg-ivory rounded-2xl border border-border-cream p-6 shadow-[rgba(0,0,0,0.05)_0px_4px_24px]">
            <h3 className="font-serif text-xl font-medium text-near-black mb-4">SHAP Interpretability</h3>
            <p className="text-olive-gray text-sm leading-relaxed mb-4">
              SHAP analysis decomposes predictions into additive feature contributions,
              revealing the mechanistic origin of each dopant's predicted properties.
            </p>
            <h4 className="font-medium text-near-black text-sm mb-2">Top Universal Descriptors</h4>
            <div className="space-y-2">
              {[
                { feat: 'Melting Temperature', shap: 0.089, prop: 'Bulk Modulus' },
                { feat: 'Unfilled Orbitals', shap: 0.142, prop: 'Band Gap' },
                { feat: 'Electronegativity', shap: 0.108, prop: 'Formation Energy' },
              ].map(f => (
                <div key={f.feat} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-near-black font-medium">{f.feat}</span>
                      <span className="text-stone-gray">|SHAP| = {f.shap}</span>
                    </div>
                    <div className="h-1.5 bg-border-warm rounded-full overflow-hidden">
                      <div className="h-full bg-terracotta rounded-full" style={{ width: `${f.shap / 0.15 * 100}%` }} />
                    </div>
                  </div>
                  <span className="text-stone-gray text-[10px] w-24 text-right">{f.prop}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-parchment rounded-lg p-3 text-xs text-olive-gray">
              <strong className="text-near-black">Ga anomaly resolved:</strong> Despite Ga having the lowest melting point,
              SHAP shows its small ionic radius (+5.2 GPa), high electronegativity (+3.1 GPa), and +3 charge (+2.4 GPa)
              outweigh the negative melting temperature contribution (&minus;4.8 GPa).
            </div>
          </div>
        </div>

        {/* DFT Validation */}
        <div className="bg-ivory rounded-2xl border border-border-cream p-6 shadow-[rgba(0,0,0,0.05)_0px_4px_24px]">
          <h3 className="font-serif text-xl font-medium text-near-black mb-2">DFT Validation</h3>
          <p className="text-olive-gray text-sm mb-4">
            Independent DFT calculations (VASP, PBE functional) on 20 representative dopants at both Ca1 (4f) and Ca2 (6h) sites
            confirm ML predictions with lattice-parameter agreement within 0.01 \u00C5.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Structures Relaxed', value: '58' },
              { label: 'Lattice MAE', value: '0.009 \u00C5' },
              { label: 'Relative Error', value: '<0.05%' },
              { label: 'Lattice Variation', value: '<0.3%' },
            ].map(s => (
              <div key={s.label} className="bg-parchment rounded-xl p-4">
                <div className="font-serif text-xl font-medium text-terracotta">{s.value}</div>
                <div className="text-stone-gray text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BFoM equation */}
        <div className="mt-12 bg-near-black rounded-2xl p-8 text-center">
          <h3 className="font-serif text-xl font-medium text-ivory mb-4">Biomedical Figure of Merit</h3>
          <div className="font-mono text-coral text-lg md:text-xl mb-4 overflow-x-auto">
            BFoM = (K/K<sub>0</sub>) / (1 + E<sub>s</sub><sup>est</sup>) &times; (1 &minus; |E<sub>g</sub> &minus; E<sub>g</sub><sup>0</sup>| / 2E<sub>g</sub><sup>0</sup>) &times; T<sub>f</sub>
          </div>
          <p className="text-warm-silver text-sm max-w-2xl mx-auto">
            where K<sub>0</sub> = 102.92 GPa and E<sub>g</sub><sup>0</sup> = 5.25 eV are pure-HAp values,
            T<sub>f</sub> is a toxicity factor (1.0 for low, 0.5 for moderate, 0.1 for high),
            and the estimated substitution energy captures ionic radius mismatch and charge difference.
          </p>
        </div>
      </div>
    </section>
  )
}
