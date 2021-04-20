import './App.css';
import Letter from './letter/Letter'
import Timer from './timer/Timer';
import Categories from './categories/Categories'

function App() {
  return (
    <div className="App">
      <div className='App-Section-One'>
          <Letter />
          <Timer />
          <Categories />
      </div>
      <div className='App-Section-Two'>

      </div>
    </div>
  );
}

export default App;
