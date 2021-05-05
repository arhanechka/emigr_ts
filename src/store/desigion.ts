import { getAllRMatrixes } from "./rMatrixes";
import { IfinalData, iFinalResult } from "./storeInterfaces";

export let finalData1: IfinalData;

export const getFinalData = () => {
  return finalData1;
};

const Q1 = () => {
  let matrixes = getAllRMatrixes(finalData1);
  let resuleMatrix = matrixes[0];
  for (let i = 0; i < resuleMatrix.length; i++) {
    for (let j = 0; j < resuleMatrix.length; j++) {
      for (let a = 0; a < matrixes.length; a++) {
        let tempMatrix = matrixes[a];
        if (tempMatrix[i][j] === 0) {
          resuleMatrix[i][j] = 0;
          break;
        }
      }
    }
  }
  console.log("Q1");
  console.log(resuleMatrix);
  return resuleMatrix;
};

//result of first task (MQ)
let Q2 = () => {
  let q1 = Q1();
  let resultMarix: number[][] = zeroMatrix();
  for (let i = 0; i < q1.length; i++) {
    for (let j = 0; j < q1.length; j++) {
      if (i === j || (q1[i][j] === 0 && q1[j][i] === 0)) {
        break;
      }
      let value = q1[i][j] - q1[j][i];
      if (value > 0) {
        resultMarix[i][j] = 1;
        resultMarix[j][i] = 0;
      } else if (q1[i][j] === 0 && q1[j][i] === 0) {
        resultMarix[i][j] = 0;
        resultMarix[j][i] = 0;
      } else {
        resultMarix[i][j] = 0;
        resultMarix[j][i] = 1;
      }
    }
  }
  console.log("Q2");
  console.log(resultMarix);
  return resultMarix;
};

//second task. Looks for all R matrixes and if the value == 1 - add weight of this table to the value of the cell
let Q3 = () => {
  let q1 = getAllRMatrixes(finalData1);

  let resultMatrix: number[][] = zeroMatrix();

  for (let i = 0; i < q1.length; i++) {
    //take the matrix from all R matrixes
    let tempMatrix = q1[i];

    for (let j = 0; j < tempMatrix.length; j++) {
      for (let k = 0; k < tempMatrix.length; k++) {
        //if the value is 1 - add the weight to it
        if (tempMatrix[j][k] === 1) {
          resultMatrix[j][k] += finalData1.characteristics[i].weight;
          // resultMatrix[j][k] = Math.round((resultMatrix[j][k] + Number.EPSILON) * 100) / 100
        }
      }
    }
  }
  return resultMatrix;
};

let roundMatrixValues = (matrix: number[][]) => {
  let tempMatrix = matrix;
  for (let j = 0; j < matrix.length; j++) {
    for (let k = 0; k < matrix.length; k++) {
      tempMatrix[j][k] =
        Math.round((matrix[j][k] + Number.EPSILON) * 100) / 100;
    }
  }
  return tempMatrix;
};

//result of second task. Looks to Q3 and subtract from row/column - column/row.  if result <0 then 0
let Q4 = () => {
  let q3 = roundMatrixValues(Q3());
  console.log("Q3");

  console.log(q3);
  let resultMarix: number[][] = zeroMatrix();
  for (let i = 0; i < q3.length; i++) {
    for (let j = 0; j < q3.length; j++) {
      if (i === j || (q3[i][j] === 0 && q3[j][i] === 0)) {
        break;
      }
      let value = q3[i][j] - q3[j][i];
      if (value > 0) {
        resultMarix[i][j] = parseFloat(value.toFixed(2));
        resultMarix[j][i] = 0;
      } else if (q3[i][j] === 0 && q3[j][i] === 0) {
        resultMarix[i][j] = 0;
        resultMarix[j][i] = 0;
      } else {
        resultMarix[i][j] = 0;
        resultMarix[j][i] = -value;
      }
      // resultMarix[j][i] =   parseFloat(-value.toFixed(2));}
    }
  }
  console.log("Q4");
  console.log(roundMatrixValues(resultMarix));
  return resultMarix;
};

//take Q2 and Q4 result matrixes. Create new matrix from to results rows (from Q2 and Q4)
export const finalMatrix = (finalData: IfinalData) => {
  finalData1 = finalData;
  let resultOfQ2 = getаFinalRow(Q2());
  let resultOfQ4 = getаFinalRow(Q4());
  console.log("resultOfQ2");
  console.log(resultOfQ2);
  console.log("resultOfQ4");
  //  console.log(roundMatrixValues(resultOfQ4))
  //  let finalMatrix = roundMatrixValues(finalResult(resultOfQ2, resultOfQ4))
  let finalMatrix = finalResult(resultOfQ2, resultOfQ4);

  console.log("finalMatrix");
  console.log(finalMatrix);
  return finalMatrix;
};

let finalResult = (matrix1: number[], matrix2: number[]) => {
  let finalMatrix = [];
  for (let i = 0; i < matrix1.length; i++) {
    finalMatrix[i] = matrix1[i] > matrix2[i] ? matrix2[i] : matrix1[i];
  }
  return finalMatrix;
};

//take matrix and subtract the sum of rows from 1. Return result row
let getаFinalRow = (matrix: number[][]) => {
  let resultMatrix: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][i];
    }
    let result = 1 - sum;
    resultMatrix[i] = result < 0 ? 0 : result;
  }
  return resultMatrix;
};

let zeroMatrix = () => {
  let matrix: number[][] = [];
  for (let i = 0; i < finalData1.countries.length; i++) {
    matrix[i] = [];
    for (var j = 0; j < finalData1.countries.length; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
};

//take final matrix. Select the minimum value from the column. Then select the maximum value from this minimums.
let desigion = (matrix: number[]) => {
  let index = 0;
  let value = matrix[0];
  let finalResult: iFinalResult[] = [];
  matrix.forEach(function (item: number, i: number, arr: number[]) {
    finalResult.push({ name: finalData1.countries[i], raiting: item });
    if (item > value) {
      value = item;
      index = i;
    }
  });
  console.log(finalResult);

  finalResult.sort(function (a, b) {
    return b.raiting - a.raiting;
  });
  console.log("finalResult");

  console.log(finalResult);

  console.log("DESIGION IS: ");
  console.log(finalData1.countries[index]);
  return finalResult;
};

export const makeDesigion = (finalData: IfinalData): iFinalResult[] => {
  let finalResult = desigion(finalMatrix(finalData));
  return finalResult
};
