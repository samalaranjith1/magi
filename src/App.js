import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Admin from './components/Admin';
import MainTab from './components/MainTab';
import AllDetails from './components/AllDetails';
import TodaysAcc from './components/TodaysAcc';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <AllDetails />
      <TodaysAcc />
    </div>
  );
}

export default App;
