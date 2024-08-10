function sortIt(arr){
    //coding here...
    var frekans ={};
    for (var i=0 ;i<arr.length;i++){
      var num = arr[i];
      frekans[num]=(frekans[num] || 0)+ 1;
    }
    // console.log(frekans)
    var sortedarray= arr.slice().sort((a, b) =>{
      var freka= frekans[a];
      var frekb= frekans[b];
      if (freka==frekb){
        return a-b;
      }else{
        return frekb-freka;
      }
    });
    
    return sortedarray.reverse();
  }


//sample tests

  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample tests", () => {
  it("Should pass sample tests", () => {
    assert.deepEqual(sortIt([1,1,1,2,2,3]) , [3,2,2,1,1,1]);
    assert.deepEqual(sortIt([1,1,1,2,2,2,3,3,3]) , [3,3,3,2,2,2,1,1,1]);
    assert.deepEqual(sortIt([1,2,3,4,4,5,5,6,6]) , [3,2,1,6,6,5,5,4,4]);
    var arr1=[1,3,3,5,2,2,4,6,6,7,7,7],copy=arr1.slice();
    assert.deepEqual(sortIt(arr1) , [5,4,1,6,6,3,3,2,2,7,7,7]);
    assert.deepEqual(arr1 , copy , "You should not modify the original array");
  });
});