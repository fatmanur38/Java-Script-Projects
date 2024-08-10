function isolateIt(arr){
    //coding here...
    var result = arr.map(string =>{
      var len = string.length;
      var middle = len/2;
      if (len%2 == 0){
        return string.slice(0,middle) + "|" + string.slice(middle);
      }else{
        return string.slice(0,middle)+ "|" + string.slice(middle+1);
      }
    })
    return result;
  }



//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(isolateIt(["abcd","efgh"]) , ["ab|cd","ef|gh"]);
      Test.assertSimilar(isolateIt(["abcde","fghij"]) , ["ab|de","fg|ij"]);
      Test.assertSimilar(isolateIt(["1234","56789"]) , ["12|34","56|89"]);
  
    });
  });