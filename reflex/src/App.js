import './App.css';
import Navigation from './components/Navigation/Navigation';
import SendMessage from './components/SendMessage/SendMessage';


function App() {
  return (
    <div className="App">
      <Navigation />
      Welcome to Relfex
      <SendMessage />
    </div>
  );
}

export default App;
