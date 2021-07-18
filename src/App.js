import './App.css';
import Header from './components/Sections/Header/Header';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Home />
    </div>
  );
}

export default App;
