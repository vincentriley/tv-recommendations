import "./App.css";
import Header from "./Components/Header";
import ProgrammeList from "./Components/ProgrammeList";
import Recommendations from "./Components/Recommendations";
import { useState } from "react";
import AddRecommendation from "./Components/AddRecommendation";
import ClearList from "./Components/ClearList";

function App() {
	const [programmes, setProgrammes] = useState([]);
	const addProgramme = (programme) => {
		setProgrammes((currentProgrammes) => {
			return [
				...currentProgrammes,
				{ id: Math.random(), name: programme, watched: false },
			];
		});
	};
	const changeWatchedStatus = (programmeToChangeWatchStatus) => {
				setProgrammes((allProgrammes) => {
            const newProgrammes = [...allProgrammes]
            return newProgrammes.map((programme) => {
              if (programme.name === programmeToChangeWatchStatus) {
                programme.watched = !programme.watched
              }
              return programme
            })
        })
	};
  const clearList = () => {
    
  }
	return (
		<div className='App'>
			<Header />
			<AddRecommendation addProgramme={addProgramme} />
			<Recommendations addProgramme={addProgramme} />
      <ClearList />
			<ProgrammeList
				programmes={programmes}
				changeWatchedStatus={changeWatchedStatus}
			/>
		</div>
	);
}

export default App;
