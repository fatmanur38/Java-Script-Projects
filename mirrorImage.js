function mirrorImage(arr){
    //coding here...
    var result =[-1,-1]
    arr.some((x,i)=>{
     var a = arr[i];
     var b = arr[i+1];
      if (b !== undefined && a.toString() === b.toString().split("").reverse().join("")){
        result=[a,b];
       // console.log(result);
        return true;
      }
        return false;
     
    })
     return result;
  }


//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(mirrorImage([11,22,33,33,22,11]) , [33,33]);
      Test.assertSimilar(mirrorImage([454,86,57,75,16,88]) , [57,75]);
      Test.assertSimilar(mirrorImage([454,0,57,0,16,88]) , [-1,-1]);
    });
  });
  