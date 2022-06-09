import MainDisplay from '../components/MainDisplay'
import Panel from '../components/Panel'

export default function Home ({
  wineList,
  setFilteredReds,
  setFilteredWhites,
  filteredReds,
  filteredWhites,
  setMainDisplay,
  mainDisplay
}) {
  return (
    <main>
      <Panel
        wineList={wineList}
        setFilteredReds={setFilteredReds}
        setFilteredWhites={setFilteredWhites}
        setMainDisplay={setMainDisplay}
      />
      <MainDisplay
        wineList={wineList}
        filteredReds={filteredReds}
        filteredWhites={filteredWhites}
      />
    </main>
  )
}
