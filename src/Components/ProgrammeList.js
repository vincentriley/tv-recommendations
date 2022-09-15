const ProgrammeList = ({ programmes, changeWatchedStatus }) => {
    console.log(programmes)
	// const changeWatchedStatus = (programmeName) => {
	// 	setProgrammes((allProgrammes) => {
    //         const newProgrammes = [...allProgrammes]
    //         // console.log(newProgrammes)
	// 		// return allProgrammes.map((programme) => {
	// 		// 	if (programme.name === programmeName) {
	// 		// 		programme.watched != programme.watched;
	// 		// 	}
    //         //     return programme
	// 		// });
	// 	});
	// };
	return (
		<div>
			<h1>Programme List</h1>
			<ul>
				{programmes.map((programme) => {
					return (
						<li key={programme.id}>
							<h2>{programme.name}</h2>
							{programme.watched ? (
								<button
									value={programme.name}
									onClick={(e) => {
										changeWatchedStatus(e.target.value);
									}}
								>
									{" "}
									&#10004;
								</button>
							) : (
								<button
									value={programme.name}
									onClick={(e) => {
										changeWatchedStatus(e.target.value);
									}}
								>
									X
								</button>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ProgrammeList;
