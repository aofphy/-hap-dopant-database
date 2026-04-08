import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PeriodicTableView } from './components/PeriodicTableView'
import { DatabaseTable } from './components/DatabaseTable'
import { PredictionTool } from './components/PredictionTool'
import { Methodology } from './components/Methodology'
import { Footer } from './components/Footer'
import type { Dopant } from './data/dopants'

export default function App() {
  const [selectedDopant, setSelectedDopant] = useState<Dopant | null>(null)

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PeriodicTableView selectedDopant={selectedDopant} onSelectDopant={setSelectedDopant} />
      <DatabaseTable onSelectDopant={setSelectedDopant} />
      <PredictionTool selectedDopant={selectedDopant} onSelectDopant={setSelectedDopant} />
      <Methodology />
      <Footer />
    </div>
  )
}
