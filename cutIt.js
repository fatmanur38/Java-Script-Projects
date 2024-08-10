function cutIt(arr){
    //coding here...
    var result=[]
    var min= arr[0].length
    for (var i= 0 ; i<arr.length;i++){
      if (arr[i].length < min){
        min = arr[i].length
      }
    }
    
    for (var j=0 ;j<arr.length ; j++){
       var a= arr[j].substring(0,min)
        result.push(a)
    }
    return result
  }



//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(cutIt(["ab","cde","fgh"]) , ["ab","cd","fg"]);
      Test.assertSimilar(cutIt(["abc","defgh","ijklmn"]) , ["abc","def","ijk"]);
      Test.assertSimilar(cutIt(["codewars","javascript","java"]) , ["code","java","java"]);
  
    });
  });