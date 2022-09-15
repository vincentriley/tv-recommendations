import './App.css';
import Header from './Components/Header';
import ProgrammeList from './Components/ProgrammeList';
import Recommendations from './Components/Recommendations';
import { useState } from 'react';

function App() {
  
  const [programmes, setProgrammes] = useState([{name: "The Sopranos", watched: true}])
  return (
    <div className="App">
      <Header />
      <Recommendations setProgrammes={setProgrammes} />
      <ProgrammeList programmes={programmes}/>
    </div>
  );
}

export default App;
