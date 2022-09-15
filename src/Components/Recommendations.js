const Recommendations = ({addProgramme}) => {
    return (
        
        <div>
            <h1>Add programme to list</h1>
        <form>
            <input id="programmeInput" type="text"></input>
            <input onClick={(e) => {
                e.preventDefault()
                const programmeToAdd = document.getElementById("programmeInput")
                addProgramme(programmeToAdd.value)
            }} type="submit" value="Add"></input>
        </form>
        </div>
    )
}

export default Recommendations