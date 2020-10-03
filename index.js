// Your code here

const mapToNegativize = (sourceArray) => {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

const mapToNoChange = (sourceArray) => {
    return sourceArray
}

const mapToDouble = (sourceArray) => {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

const mapToSquare = (sourceArray) => {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * sourceArray[i])
    }
    return newArray
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
    for(let i = 0; i < sourceArray.length; i++) {
        startingPoint += sourceArray[i]
    }
    return startingPoint
}

const reduceToAllTrue = (sourceArray) => {
    let trueArray = []
    let falseArray = []
    for(let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            trueArray.push(sourceArray[i])
        } else {
            falseArray.push(sourceArray[i])
        }
    }

    if (falseArray.length !== 0) {
        return false
    } else {
        return true
    }

}

const reduceToAnyTrue = (sourceArray) => {
    for(let i = 0; i < sourceArray.length; i ++) {
        if (sourceArray[i]) {
            return true
        }
    }
    return false
}