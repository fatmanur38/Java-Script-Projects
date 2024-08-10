function infiniteLoop(arr,d,n){
    //coding here...
    for (var i=0 ;i<n;i++){
      if (d=="left"){
        var ilk = arr[0].shift();
        for (var j=0 ;j<arr.length - 1;j++){
          arr[j].push(arr[j + 1].shift());
        }
         arr[arr.length - 1].push(ilk);
      }else if (d=="right"){
        var son = arr[arr.length - 1].pop();
         for (var j = arr.length - 1; j > 0; j--){
          arr[j].unshift(arr[j - 1].pop());
        }
        arr[0].unshift(son);
          }
    }
    return arr;
    
  }




// sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1) , [[2,3,4],[5,6,7],[8,9,1]]);
      Test.assertSimilar(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) , [[9,1,2],[3,4,5],[6,7,8]]);
      Test.assertSimilar(infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2)  , [[3,4],[5,6,7,8],[9,10,1,2]]);
  
    });
  });
  