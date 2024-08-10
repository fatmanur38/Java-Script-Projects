function fiveLine(s){
    //coding here...
    var result=""
    var str = s.trim()
    for (var i=1 ; i<=5 ;i++){
      for (var j=1;j<=i ;j++){
        result+=str
      }
      if (i!= 5){
          result+="\n"
      }
    }
    return result.trim()
  }

//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(fiveLine("  a") , "a\naa\naaa\naaaa\naaaaa");
      Test.assertSimilar(fiveLine("\txy \n") , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
      Test.assertSimilar(fiveLine("           Ok               ") , "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");
  
    });
  });