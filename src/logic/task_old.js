



let countries = ["Portugal", "UK", "Canada"]

const distances = [3269.71, 2469.59, 7744.44]

const complexity = [3,1,2]

const climate = [3,2,1]

const workAbility = [3,1,1]
let criterium = [
    distances, complexity, climate, workAbility
 ]

let criteria = [

{
    name: "complexity",
    weight: 0.3,
    direction: 0
},
{
    name: "climate",
    weight: 0.2,
    direction: 1
},
{
    name: "distance",
    weight: 0.15,
    direction: 0
},
{
    name: "work ability",
    weight: 0.35,
    direction: 1
}
]

//check if weights sum equals 1
let isWeightsSetCorrect = ()=>{
    let result = 0;
    for (var key in criteria) {
        result+= criteria[key].weight;
      }
return result == 1;      
}


//set matrix on the first step
let getMatrix = (parameter)=>{
let matrix = setDiagonale()
console.log("parameter")
console.log(parameter)

parameter.forEach(function(item, i, arr) {
   for (let j =0; j < matrix.length; j++){
       if (item < parameter[j]){
           matrix[j][i] = 1;
       }
       else{
           matrix[i][j] = 1;
       }

   }
})
return matrix
}

//set diagonale 1 on each matrix on the first step
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
let getMatrixes = ()=>{
    let matrixes = [];

    criterium.forEach(function(item, i, arr) {
        matrixes.push(getMatrix(item))
    })
    return matrixes
}

//first task
let Q1 = () => {
    let matrixes = getMatrixes();
   
//    console.log(matrixes)

   let resuleMatrix = matrixes[0];
//    console.log("~~~~~")
//    console.log(resuleMatrix)

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

    return resuleMatrix
}



//result of first task
let Q2 = () => {
    let q1 = Q1()
    console.log(q1)
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
// console.log(resultMarix)
return resultMarix
}


//second task
let Q3 = ()=>{
    let q1 = getMatrixes(); 
    let resultMatrix =zeroMatrix();

    for (let i = 0; i < q1.length; i ++){
        let tempMatrix = q1[i];
        for (let j = 0; j < tempMatrix.length; j++){
            for (let k = 0; k < tempMatrix.length; k++){
             console.log("tempMatrix")  
             console.log(tempMatrix)       

            if (tempMatrix[j][k] == 1){

                resultMatrix[j][k] +=criteria[i].weight;
            }
        }
    }
   
}
console.log(resultMatrix)
return resultMatrix
}

//result of second task
let Q4 = () => {
    let q3 = Q3()
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
    console.log(resultMarix)
    return(resultMarix)
}

let finalMatrix = ()=>{
 let firstResultMatrix = Q2()
 let secondResultMatrix = Q4()
 let firstTask = getаFinalRow(firstResultMatrix);
 let secondTask = getаFinalRow(secondResultMatrix);
 console.log(firstTask)
 console.log(secondTask)
 let finalMatrix = finalResult(firstTask, secondTask)
 console.log(finalMatrix)
 return finalMatrix
}

let desigion = (matrix) => {
    let index = 0;
    let value = matrix[0];
    matrix.forEach(function(item, i, arr){
        if (item > value){
            value = item;
            index = i;
        }
    })
    console.log("DESIGION IS: ")
    console.log(countries[index])
}

let finalResult = (matrix1, matrix2)=>{
let finalMatrix = [];
for (let i = 0; i < matrix1.length; i++){
    finalMatrix[i] = matrix1[i]>matrix2[i]? matrix2[i]: matrix1[i]
}
return finalMatrix;
}

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

// Q2()
// Q3()
// Q4()
desigion(finalMatrix())

