function bigToSmall(arr){
    //coding here...
    var result =[].concat(...arr);
     result.sort((a,b)=>b-a)
   var a= result.join(">");
    return a;
    
  }



//sample tests

  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(bigToSmall([[1,2],[3,4],[5,6]]) , "6>5>4>3>2>1");
    assert.strictEqual(bigToSmall([[1,3,5],[2,4,6]]) , "6>5>4>3>2>1");
    assert.strictEqual(bigToSmall([[1,1],[1],[1,1]]) , "1>1>1>1>1");
  });
});