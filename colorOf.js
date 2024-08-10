function colorOf(r,g,b){
    //coding here
    var x = r.toString(16)
    var y = g.toString(16)
    var z = b.toString(16)
  return  "#" + is2index(x)+is2index(y)+is2index(z)
  }
  
  function is2index(num){
    if (num.length != 2){
      num = "0" + num
    }else{
      return num
    }
    return num
  }




//sample tests
  
  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(colorOf(255,0,0), "#ff0000");
      showColor("#ff0000")
      Test.assertSimilar(colorOf(0,111,0), "#006f00");
      showColor("#006f00")
      Test.assertSimilar(colorOf(1, 2 ,3), "#010203");
      showColor("#010203")
    });
  });
  