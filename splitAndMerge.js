function splitAndMerge(string, separator) {
    var words = string.split(" ");
    var arr ="";
    var result = [] ;
    for (var i=0 ; i<words.length ;i++){
      var word = words[i].split("");
      arr = word.join(separator) ;
      result.push(arr);
    }
    return result.join(" ")
  }





  //sample tests

  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.strictEqual(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
    assert.strictEqual(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
    assert.strictEqual(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
    assert.strictEqual(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");
  });
});

