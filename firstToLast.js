function firstToLast(str,c){
    //coding here..
    var count = 0
    var result =0
    var first = str.indexOf(c)
    var last = str.lastIndexOf(c)
    var search = str.search(c)
    if (search == -1){
     result = -1
    }else{
      result =last-first
    }
    return result
  }




//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(firstToLast("ababc","a") , 2);
      Test.assertSimilar(firstToLast("ababc","c") , 0);
      Test.assertSimilar(firstToLast("ababc","d") , -1);
    });
  });
  