import logo from './logo.svg';
import './App.css';
import useAPI from './hooks/useAPI'

function App() {
  console.log(useAPI('users',2));
  return (
    <div className="App App-header">
      <h1>Custom API Hooks</h1>
    </div>
  );
}

export default App;
