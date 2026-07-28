import logoUrl from '../assets/logo.png'

export function Footer() {
  return (
    <footer className="bg-near-black border-t border-dark-surface py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logoUrl} alt="AIMS — Artificial Intelligence & Modeling for Materials Science" className="h-10 mb-3 brightness-0 invert opacity-80" />
            <h3 className="font-serif text-lg font-medium text-ivory mb-2">HAp Dopant Database</h3>
            <p className="text-stone-gray text-sm leading-relaxed">
              Machine-learning screening of cationic dopants in hydroxyapatite via transfer learning,
              validated by density functional theory.
            </p>
          </div>
          <div>
            <h4 className="text-warm-silver text-sm font-medium mb-3">Citation</h4>
            <p className="text-stone-gray text-xs leading-relaxed font-mono">
              "Machine-learning screening of cationic dopants in hydroxyapatite: Transfer learning predictions
              validated by density functional theory."
              <br />Physical Review Materials (2025).
            </p>
          </div>
          <div>
            <h4 className="text-warm-silver text-sm font-medium mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-stone-gray">
              <li><a href="#screening" className="hover:text-coral transition-colors">Periodic Table Screening</a></li>
              <li><a href="#database" className="hover:text-coral transition-colors">Full Database (59 elements)</a></li>
              <li><a href="#predict" className="hover:text-coral transition-colors">Prediction Tool</a></li>
              <li><a href="#methodology" className="hover:text-coral transition-colors">Methodology</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-surface pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-gray text-xs">
            Data: AFLOW, MatBench databases. Models: scikit-learn + Matminer. DFT: VASP (PBE).
          </p>
          <p className="text-stone-gray text-xs">
            Built for the materials science research community.
          </p>
        </div>
      </div>
    </footer>
  )
}
