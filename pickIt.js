function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for (var i=0 ;i<arr.length ;i++){
      if (arr[i] % 2 == 1){
        odd.push(arr[i])
      }else{
        even.push(arr[i])
      }
    }
    
    return [odd,even];
  }




  //sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(pickIt([1,2]),[[1],[2]]);
      Test.assertSimilar(pickIt([1,2,3]),[[1,3],[2]]);
      Test.assertSimilar(pickIt([3,2,1]),[[3,1],[2]]);
      Test.assertSimilar(pickIt([10,20,30]),[[],[10,20,30]]);
      Test.assertSimilar(pickIt([11,21,31]),[[11,21,31],[]]);
      Test.assertSimilar(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);
    });
  });