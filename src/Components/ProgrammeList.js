import Programme from "./Programme";

const ProgrammeList = ({programmes}) => {
    console.log(programmes)
	return (
		<div>
			<h1>Programme List</h1>
            <ul>
			{
                programmes.map((programme) => {
                    return <li key={programme.name}>
                        <h2>{programme.name}</h2>
                        {programme.watched ? <h2>	&#10004;</h2> : <h2>x</h2>}
                    </li>
                })
            }
            </ul>
		</div>
	);
};

export default ProgrammeList;
