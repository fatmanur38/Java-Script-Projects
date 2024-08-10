function getLength(arr){
    //return length of arr
   
    return arr.length
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length-1]
  }
  function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el);
    return arr
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop();
    return arr
  }



//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(getLength([1,2,3]),3);
      Test.assertSimilar(getFirst([1,2,3]),1);
      Test.assertSimilar(getLast([1,2,3]),3);
      Test.assertSimilar(pushElement([1,2,3]).length,4);
      Test.assertSimilar(popElement([1,2,3]).length,2);
    });
  });