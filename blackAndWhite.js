function blackAndWhite(arr){
    //coding here...
    if(!Array.isArray(arr)){
     return "It's a fake array";
    }
      var five = arr.indexOf(5);
      var thirteen =arr.indexOf(13);
   // console.log(five)
   // console.log(thirteen)
      var hasfive = false;
      var hasthirteen = false;
      if (five !== -1){
        hasfive =true;
      }
      if (thirteen !== -1){
        hasthirteen =true;
      }
    
       if (hasfive && hasthirteen){
         return "It's a black array";
       }else {
         return "It's a white array";
       }
      
  }




//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(blackAndWhite(5,13) , "It's a fake array");
      Test.assertSimilar(blackAndWhite([5,13]) , "It's a black array");
      Test.assertSimilar(blackAndWhite([5,12]) , "It's a white array");
   
    });
  });