import { useEffect } from "react";
import { useState } from "react";
import Panel from "./components/Panel";
import MainDisplay from "./components/MainDisplay";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [wineList, setWineList] = useState([]);
  const [wine, setWine] = useState(null);
  const [filteredList, setFilteredList] = useState(null)

  // let wine;

  const URL = "https://wine-app-group.herokuapp.com/";
  // const getWineName = (name) => {
  //   wine = wineList.filter((e) => e === name);
  // };

  const getWine = async () => {
    const response = await fetch(URL + "vineyard").then((res) => res.json());
    setWineList(response);
  
  };

const updateWine = async (wine, id) => {
  await fetch(URL + 'wine/' + wine._id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(wine)
  })
  getWine()
}


  useEffect(() => {
    getWine();
  }, []);



  return (
    <div className="App">
      <Header />
      <main>
      <Panel wineList={wineList} setWine={setWine} setFilteredList={setFilteredList} />
      <MainDisplay wineList={wineList} wine={wine} filteredList={filteredList} setFilteredList={setFilteredList} setWine={setWine} updateWine={updateWine}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
