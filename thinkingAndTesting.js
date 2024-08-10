function thinkingAndTesting(number,base){
    //coding here...
    for (var i=1;i<number;i++){
      if(Math.pow(base,i)> number){
        break;
      }
    }
    return number-Math.pow(base,i-1);
  }


//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(thinkingAndTesting(1,2),0);
      Test.assertSimilar(thinkingAndTesting(2,2),0);
      Test.assertSimilar(thinkingAndTesting(3,2),1);
      Test.assertSimilar(thinkingAndTesting(4,2),0);
      Test.assertSimilar(thinkingAndTesting(5,2),1);
      Test.assertSimilar(thinkingAndTesting(6,2),2);
      Test.assertSimilar(thinkingAndTesting(10,2), 2);
      Test.assertSimilar(thinkingAndTesting(100,2),36);
      Test.assertSimilar(thinkingAndTesting(1000,2),488);
      Test.assertSimilar(thinkingAndTesting(111,10),11);
      Test.assertSimilar(thinkingAndTesting(222,10),122);
      Test.assertSimilar(thinkingAndTesting(333,10),233);
      Test.assertSimilar(thinkingAndTesting(1111,10),111);
    });
  });
  