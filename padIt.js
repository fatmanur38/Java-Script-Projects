function padIt(str,n){
    //coding here
    while(n>0){
      if (n % 2 == 1){
        str = "*"+str;
        n--;
      }else{
        str = str+"*";
        n--;
      }
    }
    return str;
  }



//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(padIt("a",1),"*a");
      Test.assertSimilar(padIt("a",2),"*a*");
      Test.assertSimilar(padIt("a",3),"**a*");
      Test.assertSimilar(padIt("a",4),"**a**");
      Test.assertSimilar(padIt("a",5),"***a**");
    });
  });