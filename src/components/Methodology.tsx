import { dftElastic, PURE_HAP_K, PURE_HAP_K_DFT, PURE_HAP_EFORM, PURE_HAP_EG } from '../data/dopants'

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
                  { prop: 'Bulk Modulus (K)', db: 'AFLOW (1,181)', r2: '0.935 \u00B1 0.032', ci: '[0.860, 0.971]', mae: '9.3 \u00B1 1.1 GPa', rmse: '18.1 \u00B1 4.2 GPa' },
                  { prop: 'Band Gap (Eg)', db: 'MatBench (10,000)', r2: '0.812 \u00B1 0.021', ci: '[0.767, 0.850]', mae: '0.39 \u00B1 0.02 eV', rmse: '0.69 \u00B1 0.04 eV' },
                  { prop: 'Formation Energy', db: 'MatBench (10,000)', r2: '0.945 \u00B1 0.008', ci: '[0.927, 0.959]', mae: '0.15 \u00B1 0.01 eV/at', rmse: '0.27 \u00B1 0.02 eV/at' },
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
            Bootstrap uncertainty quantification with n=1,000 iterations on the training databases
            (five-fold cross-validation R<sup>2</sup> = 0.926 for bulk modulus).
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
                <span>ML ranks Lu<sup>3+</sup>, Ti<sup>4+</sup>, Zr<sup>4+</sup> highest in bulk modulus (+4.2%, +3.9%, +3.6%), but DFT does not confirm it: none of the ten dopants tested stiffens HAp at 10 mol%</span>
              </li>
              <li className="flex gap-2">
                <span className="text-terracotta font-bold mt-0.5">&#8226;</span>
                <span>DFT bulk moduli lie between 70.6 and 80.1 GPa (host 80.0 GPa); Zr, Mg, Sr and Sc preserve the host stiffness within 0.4 GPa, Al softens it most</span>
              </li>
              <li className="flex gap-2">
                <span className="text-terracotta font-bold mt-0.5">&#8226;</span>
                <span>Sr<sup>2+</sup> ranks first by biomedical figure of merit in all weighting scenarios, followed by Mg<sup>2+</sup> and Ba<sup>2+</sup>; Y<sup>3+</sup> and Sc<sup>3+</sup> are promising but weight-dependent</span>
              </li>
              <li className="flex gap-2">
                <span className="text-terracotta font-bold mt-0.5">&#8226;</span>
                <span>DFT stiffness tracks the distortion of the dopant's oxygen polyhedron (r = &minus;0.86), not its formal charge: a local effect composition-only features cannot represent</span>
              </li>
              <li className="flex gap-2">
                <span className="text-terracotta font-bold mt-0.5">&#8226;</span>
                <span>Electronegativity identified as universal descriptor across all three properties; alkali metals (Na, K, Rb, Cs, Li) uniformly weaken the lattice (&minus;5 to &minus;8%)</span>
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
            Independent DFT calculations (VASP, PBE functional): 29 dopants relaxed at both Ca1 (4f) and Ca2 (6h) sites
            in 44-atom cells at 10 mol% (58 structures) supply site preference, substitution energy and band gap.
            Elastic tensors for ten doped cells, each dopant at its preferred site and lowest-energy spin state, test the ML bulk moduli directly.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Structures Relaxed', value: '58' },
              { label: 'Elastic Tensors', value: '10 + host' },
              { label: 'ML \u2212 DFT Offset', value: '26.9 \u00B1 3.1 GPa' },
              { label: 'Rank Correlation', value: '\u03C1 = 0.33' },
            ].map(s => (
              <div key={s.label} className="bg-parchment rounded-xl p-4">
                <div className="font-serif text-xl font-medium text-terracotta">{s.value}</div>
                <div className="text-stone-gray text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border-warm text-left">
                  <th className="px-3 py-2 font-medium text-olive-gray">Dopant</th>
                  <th className="px-3 py-2 font-medium text-olive-gray">Site</th>
                  <th className="px-3 py-2 font-medium text-olive-gray">K<sub>ML</sub> (GPa)</th>
                  <th className="px-3 py-2 font-medium text-olive-gray">K<sub>DFT</sub> (GPa)</th>
                  <th className="px-3 py-2 font-medium text-olive-gray">vs host (80.0)</th>
                </tr>
              </thead>
              <tbody>
                {dftElastic.map(d => (
                  <tr key={d.element} className="border-b border-border-cream">
                    <td className="px-3 py-2 font-medium text-near-black">{d.element}</td>
                    <td className="px-3 py-2 text-olive-gray">{d.site}</td>
                    <td className="px-3 py-2 font-mono text-olive-gray">{d.K_ML.toFixed(1)}</td>
                    <td className="px-3 py-2 font-mono text-terracotta font-medium">{d.K_DFT.toFixed(1)}</td>
                    <td className="px-3 py-2 font-mono text-olive-gray">{d.K_DFT - PURE_HAP_K_DFT > 0 ? '+' : ''}{(d.K_DFT - PURE_HAP_K_DFT).toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-gray text-xs mt-4">
            The pure-HAp value of 80.0 GPa agrees with prior first-principles results (77 to 79 GPa) and experiment (82 to 89 GPa).
            Charge-compensated supercells soften Ti and Zr further (53.4 and 73.7 GPa). The bulk-modulus ranking therefore requires DFT confirmation;
            the prediction that Mg and Sr leave the host stiffness intact is confirmed.
          </p>
        </div>

        {/* BFoM equation */}
        <div className="mt-12 bg-near-black rounded-2xl p-8 text-center">
          <h3 className="font-serif text-xl font-medium text-ivory mb-4">Biomedical Figure of Merit</h3>
          <div className="font-mono text-coral text-lg md:text-xl mb-4 overflow-x-auto">
            BFoM = (K/K<sub>0</sub>) / (1 + |E<sub>form</sub> &minus; E<sub>form</sub><sup>0</sup>| / E<sub>norm</sub>) &times; max(0, 1 &minus; |E<sub>g</sub> &minus; E<sub>g</sub><sup>0</sup>| / 2E<sub>g</sub><sup>0</sup>) &times; T<sub>f</sub>
          </div>
          <p className="text-warm-silver text-sm max-w-2xl mx-auto">
            where K, E<sub>form</sub> and E<sub>g</sub> are the ML-predicted properties of the doped composition,
            K<sub>0</sub> = {PURE_HAP_K.toFixed(2)} GPa, E<sub>form</sub><sup>0</sup> = {PURE_HAP_EFORM.toFixed(2)} eV/atom and E<sub>g</sub><sup>0</sup> = {PURE_HAP_EG.toFixed(2)} eV
            are the ML values for undoped HAp, E<sub>norm</sub> = 1 eV/atom, and T<sub>f</sub> is a toxicity factor (1.0 low, 0.5 moderate, 0.1 high).
            The host scores 1.000 by construction and is the reference, not a candidate. Sr stays rank 1 in all 39 weighting scenarios tested.
          </p>
        </div>
      </div>
    </section>
  )
}
