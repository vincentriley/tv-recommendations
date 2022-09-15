const pickRandomProgramme = (programmeArray) => {
    return programmeArray[Math.floor(Math.random() * programmeArray.length)]
}


export default pickRandomProgramme