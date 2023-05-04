import "./App.css"
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App () {
  return(
    <div className="App" >
      <NavBar />
      <ItemListContainer greetings={"BIENVENIDOS A CALMER!"}/>
    </div>
  )
}

export default App;


