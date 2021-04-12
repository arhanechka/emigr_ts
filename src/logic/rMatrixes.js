const source = require('./tr_config/1')

//3 parameters: selected countires, characteristics for relocation, weights
let countries = source.countries.countries
let character = source.characteristics
let measure = source.criteriaMeaning;

//array for characteristics names
let characteristics = [];
for (key in character) {
    characteristics.push(key)
  } 
//   console.log("characteristicsNames")
//   console.log(characteristics)

//  console.log("Weights:")
// console.log(weights)
//  console.log("Countries:")
//  console.log(countries)
//  console.log("Characteristics:")
// console.log(character)
// console.log("measure:")
// console.log(measure)


//set separate R matrix on the first step for every characteristic
let getMatrix = (characteristicsName, index)=>{
    let characteristcsArray = character[characteristicsName]
    console.log("characteristcsArray ~~~~~~~~~ "+characteristcsArray)
    console.log("MEASURE ~~~~~~~~~ "+measure[index])
    
    let matrix = setDiagonale()
    characteristcsArray.forEach(function(item, i, arr) {
       for (let j =0; j < matrix.length; j++){
            if (setMatrixValuesCondition(measure[index], item, characteristcsArray[j])){
               matrix[j][i] = 1;
           }
           else{
               matrix[i][j] = 1;
           }
        }
    })
    return matrix
    }

    let setMatrixValuesCondition = (measure, firstItem, secondItem)=>{
        if (measure==1)
            return firstItem < secondItem
        else
        return firstItem > secondItem
    }
    
    //set diagonale 1 on each matrix on the first step and 0 for another cells
    let setDiagonale = ()=>{
        let matrix = [];
        for (let i = 0; i < countries.length; i++){
            matrix[i] = [];
            for (var j = 0; j < countries.length; j++){
                matrix[i][j] = 0;
                matrix[i][i] = 1;
            }
        }
        return matrix;
    }
    
    //set array of all matrixes
    exports.getAllRMatrixes = ()=>{
        let rMatrixes = [];
    
        characteristics.forEach(function(item, i, arr) {
            rMatrixes.push(getMatrix(item, i))
        })
        console.log ("rMatrixes")
        console.log (rMatrixes)
        console.log ("end")
    
        return rMatrixes
    }

