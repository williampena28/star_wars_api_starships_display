import './App.css';
import DisplayStarShips from './components/display_starships/index'
import Title from './components/title/title.js'

function App() {
  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <section></section>
      <DisplayStarShips/>
    </div>
  );
}

export default App;
