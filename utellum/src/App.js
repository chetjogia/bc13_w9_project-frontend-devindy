import './App.css';
import {bootcampers} from './TestData/index.js'
import BootcamperList from './Components/BootcamperList'
import Header from './Components/Header'
import Search from './Components/Search'


function App() {
  console.log(bootcampers)
  return (
    <div className="App">
      <Header/>
      <Search/>
      <BootcamperList/>
    </div>
  );
}

export default App;
