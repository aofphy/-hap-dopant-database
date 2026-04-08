import { useState, useMemo } from 'react'
import { dopants, type Dopant } from '../data/dopants'

interface Props {
  onSelectDopant: (d: Dopant) => void
}

type SortKey = 'rank' | 'element' | 'K' | 'deltaK' | 'ionicRadius' | 'charge' | 'group' | 'toxicity'

const groups = ['All', 'Alkali', 'Alkaline Earth', '3d TM', '4d TM', '5d TM', 'Lanthanide', 'Post-TM']

export function DatabaseTable({ onSelectDopant }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('rank')
  const [sortAsc, setSortAsc] = useState(true)
  const [filterGroup, setFilterGroup] = useState('All')
  const [filterToxicity, setFilterToxicity] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let data = [...dopants]
    if (filterGroup !== 'All') data = data.filter(d => d.group === filterGroup)
    if (filterToxicity !== 'All') data = data.filter(d => d.toxicity === filterToxicity)
    if (search) data = data.filter(d => d.element.toLowerCase().includes(search.toLowerCase()))

    data.sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey]
      if (typeof av === 'number' && typeof bv === 'number') return sortAsc ? av - bv : bv - av
      return sortAsc ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av))
    })
    return data
  }, [sortKey, sortAsc, filterGroup, filterToxicity, search])

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortAsc(!sortAsc)
    else { setSortKey(key); setSortAsc(true) }
  }

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <span className="text-stone-gray/50 ml-1">&#8597;</span>
    return <span className="text-terracotta ml-1">{sortAsc ? '&#9650;' : '&#9660;'}</span>
  }

  return (
    <section id="database" className="bg-parchment py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-terracotta text-sm font-medium tracking-wider uppercase mb-3 text-center">
          Complete Results
        </p>
        <h2 className="font-serif text-3xl md:text-[42px] font-medium text-near-black leading-tight text-center mb-3">
          Dopant Screening Database
        </h2>
        <p className="text-olive-gray text-center max-w-2xl mx-auto mb-10">
          All 59 non-radioactive elements ranked by predicted bulk modulus for Ca<sup>2+</sup> substitution in HAp.
          Sort by any column and filter by group or toxicity.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6 items-center justify-center">
          <input
            type="text"
            placeholder="Search element..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-ivory border border-border-cream rounded-xl px-4 py-2 text-sm text-near-black placeholder:text-stone-gray focus:outline-none focus:border-terracotta/50 w-44"
          />
          <select
            value={filterGroup}
            onChange={e => setFilterGroup(e.target.value)}
            className="bg-ivory border border-border-cream rounded-xl px-4 py-2 text-sm text-near-black focus:outline-none focus:border-terracotta/50"
          >
            {groups.map(g => <option key={g} value={g}>{g === 'All' ? 'All Groups' : g}</option>)}
          </select>
          <select
            value={filterToxicity}
            onChange={e => setFilterToxicity(e.target.value)}
            className="bg-ivory border border-border-cream rounded-xl px-4 py-2 text-sm text-near-black focus:outline-none focus:border-terracotta/50"
          >
            <option value="All">All Toxicity</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
          <span className="text-stone-gray text-sm">{filtered.length} elements</span>
        </div>

        {/* Table */}
        <div className="bg-ivory rounded-2xl border border-border-cream shadow-[rgba(0,0,0,0.05)_0px_4px_24px] overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-warm text-left">
                {([
                  ['rank', 'Rank'],
                  ['element', 'Element'],
                  ['group', 'Group'],
                  ['K', 'K (GPa)'],
                  ['deltaK', '\u0394K (%)'],
                  ['ionicRadius', 'Ionic Radius (\u00C5)'],
                  ['charge', 'Charge'],
                  ['toxicity', 'Toxicity'],
                ] as [SortKey, string][]).map(([key, label]) => (
                  <th
                    key={key}
                    onClick={() => toggleSort(key)}
                    className="px-4 py-3 font-medium text-olive-gray cursor-pointer hover:text-near-black select-none whitespace-nowrap"
                  >
                    {label}
                    <SortIcon col={key} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(d => (
                <tr
                  key={d.element}
                  onClick={() => onSelectDopant(d)}
                  className="border-b border-border-cream/60 hover:bg-warm-sand/30 cursor-pointer transition-colors"
                >
                  <td className="px-4 py-3 text-stone-gray">{d.rank}</td>
                  <td className="px-4 py-3 font-medium text-near-black">
                    {d.element}
                    <sup className="text-stone-gray text-xs ml-0.5">{d.charge}+</sup>
                  </td>
                  <td className="px-4 py-3 text-olive-gray">{d.group}</td>
                  <td className="px-4 py-3 font-mono text-near-black">{d.K.toFixed(2)}</td>
                  <td className={`px-4 py-3 font-mono font-medium ${d.deltaK >= 0 ? 'text-terracotta' : 'text-[#4a7fa5]'}`}>
                    {d.deltaK > 0 ? '+' : ''}{d.deltaK.toFixed(2)}
                  </td>
                  <td className="px-4 py-3 font-mono text-olive-gray">{d.ionicRadius.toFixed(2)}</td>
                  <td className="px-4 py-3 text-olive-gray">+{d.charge}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      d.toxicity === 'Low' ? 'bg-green-100 text-green-800' :
                      d.toxicity === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {d.toxicity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
