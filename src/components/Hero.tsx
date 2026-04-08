import logoUrl from '../assets/logo.png'

export function Hero() {
  return (
    <section className="bg-parchment py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <img src={logoUrl} alt="AIMS Lab" className="h-12 mx-auto mb-6" />
        <p className="text-terracotta text-sm font-medium tracking-wider uppercase mb-4">
          Machine Learning for Biomaterials
        </p>
        <h1 className="font-serif text-4xl md:text-[56px] font-medium text-near-black leading-[1.10] mb-6">
          Comprehensive Periodic Table Screening of Dopants in Hydroxyapatite
        </h1>
        <p className="text-olive-gray text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          Transfer learning predictions of bulk modulus, band gap, and formation energy
          for 59 non-radioactive elements substituted at the Ca<sup>2+</sup> site &mdash;
          validated by density functional theory.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#screening"
            className="bg-terracotta text-ivory font-medium px-6 py-3 rounded-xl shadow-[0px_0px_0px_1px_#c96442] hover:brightness-110 transition"
          >
            Explore the Database
          </a>
          <a
            href="#predict"
            className="bg-warm-sand text-charcoal-warm font-medium px-6 py-3 rounded-xl shadow-[0px_0px_0px_1px_#d1cfc5] hover:shadow-[0px_0px_0px_1px_#c2c0b6] transition"
          >
            Use Prediction Tool
          </a>
        </div>

        {/* Key stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '59', label: 'Elements Screened' },
            { value: 'R\u00B2 = 0.954', label: 'Bulk Modulus Accuracy' },
            { value: '20', label: 'DFT Validations' },
            { value: '3', label: 'Properties Predicted' },
          ].map(s => (
            <div key={s.label} className="bg-ivory rounded-2xl p-5 border border-border-cream shadow-[rgba(0,0,0,0.05)_0px_4px_24px]">
              <div className="font-serif text-2xl md:text-3xl font-medium text-near-black">{s.value}</div>
              <div className="text-stone-gray text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
