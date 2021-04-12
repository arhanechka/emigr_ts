
const source = require('./tr_config/1')
const allMatrixes = require('./rMatrixes')
//3 parameters: selected countires, characteristics for relocation, weights
let countries = source.countries.countries
let character = source.characteristics
let weights = source.weights
let measure = source.criteriaMeaning;

//array for characteristics names
let characteristics = [];
for (key in character) {
    characteristics.push(key)
  } 

//first task. Looking for every R Matrixes on the same index and create the resulting table:
// if any 0 was present -> result'll be 0, else - 1
let Q1 = () => {
    let matrixes = allMatrixes.getAllRMatrixes();
   let resuleMatrix = matrixes[0];
   for (let i = 0; i < resuleMatrix.length; i++){
       for (let j = 0; j < resuleMatrix.length; j++){

           for (let a = 0; a < matrixes.length; a++){
               let tempMatrix = matrixes[a];
               if (tempMatrix[i][j] === 0){
                   resuleMatrix[i][j] = 0;
                   break;
               }
           }
       }
   }
   console.log ("Q1")
   console.log (resuleMatrix)
   return resuleMatrix
}


//result of first task (MQ)
let Q2 = () => {
    let q1 = Q1()
    let resultMarix = zeroMatrix()
    for (let i = 0; i < q1.length; i++){
        for (let j = 0; j < q1.length; j++){
            if (i === j ||  (q1[i][j] == 0 &&  q1[j][i] ==0)){
                break;
            }
            let value = q1[i][j] - q1[j][i];
            if (value>0){
                resultMarix[i][j] = 1;
                resultMarix[j][i] = 0;
            }
            else if (q1[i][j] == 0 &&  q1[j][i] ==0){
                resultMarix[i][j] = 0;
                resultMarix[j][i] = 0;
            }
            else{ 
                resultMarix[i][j] =0;
                resultMarix[j][i] = 1;}
        
    }
}
console.log("Q2")
console.log(resultMarix)
return resultMarix
}


//second task. Looks for all R matrixes and if the value == 1 - add weight of this table to the value of the cell
let Q3 = ()=>{
    let q1 = allMatrixes.getAllRMatrixes(); 
    
    let resultMatrix =zeroMatrix();

    for (let i = 0; i < q1.length; i ++){
        //take the matrix from all R matrixes
        let tempMatrix = q1[i];

        for (let j = 0; j < tempMatrix.length; j++){
            for (let k = 0; k < tempMatrix.length; k++){
     
//if the value is 1 - add the weight to it
            if (tempMatrix[j][k] == 1){
                resultMatrix[j][k] += weights[characteristics[i]];
                // resultMatrix[j][k] = Math.round((resultMatrix[j][k] + Number.EPSILON) * 100) / 100

            }
        }
    }
}
return resultMatrix
}

let roundMatrixValues = (matrix) => {
    let tempMatrix = matrix;
    for (let j = 0; j < matrix.length; j++){
        for (let k = 0; k < matrix.length; k++){
            tempMatrix[j][k] = Math.round((matrix[j][k] + Number.EPSILON) * 100) / 100
        }
    }
    return tempMatrix;
}

//result of second task. Looks to Q3 and subtract from row/column - column/row.  if result <0 then 0
let Q4 = () => {
    let q3 = roundMatrixValues(Q3());
    console.log("Q3")  

    console.log(q3)
    let resultMarix = zeroMatrix()
    for (let i = 0; i < q3.length; i++){
        for (let j = 0; j < q3.length; j++){
            if (i === j ||  (q3[i][j] == 0 &&  q3[j][i] ==0)){
                break;
            }
            let value = q3[i][j] - q3[j][i];
            if (value>0){
                resultMarix[i][j] =  parseFloat(value.toFixed(2));
                resultMarix[j][i] = 0;
            }
            else if (q3[i][j] == 0 &&  q3[j][i] ==0){
                resultMarix[i][j] = 0;
                resultMarix[j][i] = 0;
            }
            else{ 
                resultMarix[i][j] =0;
                resultMarix[j][i] =   parseFloat(-value.toFixed(2));}
        
    }
}
    console.log("Q4")
    console.log(roundMatrixValues(resultMarix))
    return(resultMarix)
}

//take Q2 and Q4 result matrixes. Create new matrix from to results rows (from Q2 and Q4)
let finalMatrix = ()=>{
 let resultOfQ2 = getаFinalRow(Q2());
 let resultOfQ4 = getаFinalRow(Q4());
 console.log("resultOfQ2")
 console.log(resultOfQ2)
 console.log("resultOfQ4")
 console.log(roundMatrixValues(resultOfQ4))
 let finalMatrix = roundMatrixValues(finalResult(resultOfQ2, resultOfQ4))
 console.log("finalMatrix")
 console.log(roundMatrixValues(finalMatrix))
 return finalMatrix
}



let finalResult = (matrix1, matrix2)=>{
let finalMatrix = [];
for (let i = 0; i < matrix1.length; i++){
    finalMatrix[i] = matrix1[i]>matrix2[i]? matrix2[i]: matrix1[i]
}
return finalMatrix;
}

//take matrix and subtract the sum of rows from 1. Return result row
let getаFinalRow =(matrix) => {
    let resultMatrix = [];
    for (let i = 0; i < matrix.length; i++){
        let sum = 0;
        for (let j = 0; j < matrix.length; j++){
            sum+=matrix[j][i]
        }
        let result = 1 - sum;
        resultMatrix[i] = result<0? 0: result
    }
    return resultMatrix
}

let zeroMatrix = ()=>{
    let matrix = [];
    for (let i = 0; i < countries.length; i++){
        matrix[i] = [];
        for (var j = 0; j < countries.length; j++){
            matrix[i][j] = 0;
        }
    }
    return matrix;
}

//take final matrix. Select the minimum value from the column. Then select the maximum value from this minimums.
let desigion = (matrix) => {
    let index = 0;
    let value = matrix[0];
    let finalResult = []
    matrix.forEach(function(item, i, arr){
        finalResult.push({name: countries[i], raiting: item})
        if (item > value){
            value = item;
            index = i;
        }
    })
   console.log(finalResult)
    
   finalResult.sort(function(a, b) {
        return b.raiting - a.raiting;
      });
      console.log("finalResult")

      console.log(finalResult)


    console.log("DESIGION IS: ")
    console.log(countries[index])
}

desigion(finalMatrix());
