export const pushWithPossibleReplace = (array, element) => {
    if (array.find((u) => u.id === element.id)) {
        return array.map((u) => (u.id !== element.id ? u : element))
    } else {
        return [...array, element]
    }
}
export const mergeExistingWithNew = (existingArray, newArray) => {
    const resultObj = {}
    newArray.forEach((u) => {
        resultObj[u.id] = u
    })
    existingArray.forEach((u) => {
        resultObj[u.id] = u
    })
    return Object.values(resultObj)
}
