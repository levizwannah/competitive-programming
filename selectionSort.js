
//User function Template for javascript

/**
 *
 * select
 * @param {number[]} arr
 * @param {number} i
 * @return {number}
 *
 * selectionSort
 * @param {number[]} arr
 * @param {number} n
 */
class Solution
{
  select(arr,i){
     let min = i;
     
     for(; i < arr.length; i++){
         if(arr[i] < arr[min]) min = i;
     }
     
     return min;
  }

  //Function to sort the array using selection sort algorithm.
  selectionSort(arr,n){
    for(let i = 0; i < arr.length; i++){
        let s = this.select(arr, i);
        
        let t = arr[i];
        arr[i] = arr[s];
        arr[s] = t;
    }
  }
    
}
