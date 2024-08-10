function threeInOne(arr){
    //coding here...
    var result = [];
    var count = 0;
    var sum =0;
    for (var i=0;i<arr.length;i++){
        sum = sum +arr[i];
        count++;
        if (count==3){
          result.push(sum);
          sum=0;
          count=0;
        }
    }
    return result;
  }


//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(threeInOne( [1,2,3] ) , [6]);
      Test.assertSimilar(threeInOne( [1,2,3,4,5,6] ) , [6,15]);
      Test.assertSimilar(threeInOne( [1,2,3,4,5,6,7,8,9] ) , [6,15,24]);
      var arr1=[1,3,5,2,4,6,7,7,7],copy=arr1.slice();
      Test.assertSimilar(threeInOne(arr1) , [9,12,21]);
      Test.assertSimilar(arr1 , copy);
  
    });
  });