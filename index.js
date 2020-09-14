// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(source => source * -1 )
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    return sourceArray.map(source => source * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(source => source ** 2)
}
// ###################################################

function reduceToTotal(sourceArray, startingPoint){
    if (startingPoint){
      return sourceArray.reduce(function(total,num){
           return total += num
    },startingPoint)}
    else{
      return sourceArray.reduce(function(total,num){
        return total += num
 },0)}
}

const reduceToAllTrue = (sourceArray) => {
    for(let i=0; i<sourceArray.length;i++){
        if (!sourceArray[i]){
            return false
        }
    }
    return true
}

const reduceToAnyTrue = (sourceArray) => {
    for(let i=0; i<sourceArray.length;i++){
        if (sourceArray[i]){
            return true
        }
    }
    return false
}

