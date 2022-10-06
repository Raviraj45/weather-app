import './App.css';
import Header from './components/Header';
import Records from './weather.json';

function App() {
  return (
    <div className="App">
      <Header data = {Records} />
    </div>
  );
}

export default App;
