function giveMeFive(obj){
    //coding here
    var array =[]
    for (var key in obj){
      if (key.length == 5 || obj[key].length == 5){
        if (key.length == 5 && obj[key].length == 5) {
          array.push(key);
          array.push(obj[key]);
        }else if (key.length == 5){
          array.push(key);
        }else if (obj[key].length == 5){
          array.push(obj[key]);
        }
      }
    }
    return array;
  }




//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
      Test.assertSimilar(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
      Test.assertSimilar(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);
  
    });
  });