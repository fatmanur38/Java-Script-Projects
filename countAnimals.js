function countAnimals(animals,count){
    //coding here...
    var result =[];
    for(var i=0 ;i<count.length ; i++){
      result.push((animals.match(new RegExp(count[i],"g")) || []).length);
    }
    return result;
  }


//sample test

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(countAnimals("dog,cat",["dog","cat"]) , [1,1]);
      Test.assertSimilar(countAnimals("dog,cat",["dog","cat","pig"]) , [1,1,0]);
      Test.assertSimilar(countAnimals("dog,dog,cat",["dog","cat"]) , [2,1]);
      Test.assertSimilar(countAnimals("dog,dog,cat",["pig","cow"]) , [0,0]);
      
    });
  });