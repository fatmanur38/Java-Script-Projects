function cutCube(volume,n){
    //coding here...
    if(!Number.isInteger(Math.cbrt(n))){
      return false;
    }
    if (!Number.isInteger(volume/n)){
      return false
    }
    
    if (Number.isInteger(Math.cbrt(volume/n))){
      return true;
    }else {
      return false;
    }
  }


//sample tests

  const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){ 
it("It should works for basic tests.", function(){

    Test.assertEquals(cutCube(27,27)    , true);
    Test.assertEquals(cutCube(512,8)    , true);
    Test.assertEquals(cutCube(512,64)   , true);
    Test.assertEquals(cutCube(50000,50) , false);
    Test.assertEquals(cutCube(432,16)   , false);
    Test.assertEquals(cutCube(256,8)    , false);
    Test.assertEquals(cutCube(27,3)     , false);
    Test.assertEquals(cutCube(123,456)  , false);
    Test.assertEquals(cutCube(27,8)    , false);
    
})})