function roundIt(n){
    //coding here...
    var nstr = n.toString();
    var split = nstr.split(".");
    if (split[0].length > split[1].length ){
      return Math.floor(n);
    }else if (split[0].length < split[1].length){
      return Math.ceil(n);
    }else{
      return Math.round(n);
    }
    
    
  }



//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(roundIt(3.45) , 4);
      Test.assertSimilar(roundIt(34.5) , 34);
      Test.assertSimilar(roundIt(34.56) , 35);
    });
  });