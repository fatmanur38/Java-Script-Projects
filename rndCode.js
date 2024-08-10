function rndCode(){
    //coding here...
    var uppercase = "ABCDEFGHIJKLM"; // 1-2
    var numbers = "0123456789";//3-6
    var symbols = "~!@#$%^&*";//7-8
    for(var i=0 ; i<100 ;i++){
      var res =""
      res += uppercase[~~(uppercase.length*Math.random())];
      res += uppercase[~~(uppercase.length*Math.random())];
      for (var j=0;j<4;j++){
        res += numbers[~~(numbers.length*Math.random())];
      }
      res += symbols[~~(symbols.length*Math.random())];
      res += symbols[~~(symbols.length*Math.random())];
      return res;
    }
    
  }


  //sample test 

  describe("Tests", () => {
    it("test", () => {
      var yourcode=rndCode();
      console.log("Your Code:",yourcode);
      Test.assertSimilar(typeof yourcode,"string","The result should be string");
      Test.assertSimilar(yourcode.length,8,"The length should be 8");
      Test.assertSimilar("ABCDEFGHIJKLM".indexOf(yourcode[0])>-1,true,"1st char should generate from A-M");
      Test.assertSimilar("ABCDEFGHIJKLM".indexOf(yourcode[1])>-1,true,"2nd char should generate from A-M");
      Test.assertSimilar(/^\d{4}$/.test(yourcode.slice(2,-2)),true,"3th-6th char should be numbers");
      Test.assertSimilar("~!@#$%^&*".indexOf(yourcode[6])>-1,true,"7th char should generate from ~!@#$%^&*");
      Test.assertSimilar("~!@#$%^&*".indexOf(yourcode[7])>-1,true,"8th char should generate from ~!@#$%^&*");
      
    });
  });