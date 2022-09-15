import watchList from "../programmeArray"
import pickRandomProgramme from "../utils"

const AddRecommendation = ({addProgramme}) => {
    return <button onClick={() => {
        addProgramme(pickRandomProgramme(watchList))
    }}>Get Recommendation</button>
}

export default AddRecommendation