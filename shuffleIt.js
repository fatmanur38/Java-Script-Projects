function shuffleIt(arr,...exchange){
    //coding here...
    var res= [...arr];
    for(var [x,y] of exchange){
      [res[x],res[y]]=[res[y],res[x]];
    }
    return res
  }



  //sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(shuffleIt([1,2,3,4,5],[1,2]) , [1,3,2,4,5]);
      Test.assertSimilar(shuffleIt([1,2,3,4,5],[1,2],[3,4]) , [1,3,2,5,4]);
      Test.assertSimilar(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) , [1,3,5,2,4]);
  
    });
  });