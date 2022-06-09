
export default function MainDisplay ({
  wineList,
  filteredWhites,
  filteredReds,
  mainDisplay
}) {
  const loaded = () => {
    if (mainDisplay === 'Red') {
      return filteredReds.map((wine, index) => {
        return (
          <div key={index}>
            {wine.name}
            {wine.type}
            {wine.year}
            {wine.price}
            {wine.details}
            {wine.image}
          </div>
        )
      })
    }
    return wineList.map((wine, index) => {
      return (
        <div key={index}>
          {wine.name}
          {wine.type}
          {wine.year}
          {wine.price}
          {wine.details}
          {wine.image}
        </div>
      )
    })
  }

  const loading = () => <h1>Loading...</h1>

  return (
    <section className='Main-Disp'>{wineList ? loaded() : loading()}</section>
  )
}
