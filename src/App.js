
import './App.css';
import './Fonts/Font.css'
import Buysellcard from './components/Buysellcard';
import Card from './components/Card';
import LineChart from './components/LineGraph';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <Card/>
      <Navbar/>
      <LineChart/>
      <div className="buysell-cards-container">
        <Buysellcard title={"Buy BTC"} color={"#1b92f5"}/>
        <Buysellcard title={"Sell BTC"} color={"#fd468f"}/>
      </div>
    </div>
  );
}

export default App;
