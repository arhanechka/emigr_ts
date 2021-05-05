import { finalData1 } from './desigion';
import {IfinalData} from './storeInterfaces'

let getmeasure = () => {
    let measure: number[]=[]
    finalData1.characteristics.forEach(()=>measure.push(0))
    return measure
}


//set separate R matrix on the first step for every characteristic
const getMatrix = (index: number)=>{
    let characteristcsArray: number[] = finalData1.characteristics[index].values;
    console.log("characteristcsArray ~~~~~~~~~ "+characteristcsArray);
    console.log("MEASURE ~~~~~~~~~ "+getmeasure()[index]);
    
    let matrix: number[][] = setDiagonale();
    characteristcsArray.forEach((item, i, arr) =>{
       for (let j =0; j < matrix.length; j++){
            if (setMatrixValuesCondition(getmeasure()[index], item, characteristcsArray[j])){
               matrix[j][i] = 1;
           }
           else{
               matrix[i][j] = 1;
           }
        }
    })
    return matrix
    }

    const setMatrixValuesCondition = (measure: number, firstItem:number, secondItem:number): boolean =>{
        if (measure===1)
            return firstItem < secondItem
        else
        return firstItem > secondItem
    }
    
    //set diagonale 1 on each matrix on the first step and 0 for another cells
    let setDiagonale = (): number [][]=>{
        let matrix: number[][] = [];
        for (let i = 0; i < finalData1.countries.length; i++){
            matrix[i] = [];
            for (var j = 0; j < finalData1.countries.length; j++){
                matrix[i][j] = 0;
                matrix[i][i] = 1;
            }
        }
        return matrix;
    }
    
    //set array of all matrixes
    export const getAllRMatrixes = (finalData: IfinalData)=>{
        console.log("~~~~~~~~~~~~~~~~~~~~finalData1~~~~~~~~~~~~~~~~~~")

        console.log(finalData1)
        let rMatrixes: number[][][] = [];
    
        finalData1.characteristics.forEach(function(item, i, arr) {
            rMatrixes.push(getMatrix(i))
        })
        console.log ("rMatrixes")
        console.log (rMatrixes)
        console.log ("end")
    
        return rMatrixes
    }


