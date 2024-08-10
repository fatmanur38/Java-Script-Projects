function maxMin(arr1,arr2){
    //coding here...
    var sub = [];
    for (var i=0 ;i<arr1.length;i++){
      for (var j=0;j<arr2.length;j++){
        if (i==j){
          sub.push(Math.abs(arr1[i]-arr2[i]));
        }else{
            continue;
        }
      }
    }
    var min = Math.min(...sub);
    var max = Math.max(...sub);
    return [max,min];
  }



//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(maxMin([1,3,5],[9,8,7])               , [8,2]);
      Test.assertSimilar(maxMin([1,10,100,1000],[0,0,0,0])     , [1000,1]);
      Test.assertSimilar(maxMin([10,20,30,40],[111,11,1,-111]) , [151,9]);
   
    });
  });