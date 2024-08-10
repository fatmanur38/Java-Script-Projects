function tailAndHead(arr){
    //coding here...
    var result = arr.slice();
   // console.log(result);
    var a = result.map((_,i)=>{
      var tail = result[i] % 10 ;
      //console.log(tail);
      var iplus1= result[i+1];
      if (iplus1 !== undefined){
      var head = result[i+1].toString()[0];
      var headint = parseInt(head);
      return tail + headint;
      }
    });
    console.log(a)
    a.pop();
    console.log(a);
    
    var res = a.reduce((x,y)=>x*y)
    return res;
  }




//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(tailAndHead([123,456,789,12,34,56,78]) , 532350);
      Test.assertSimilar(tailAndHead([1,2,3,4,5]) , 945);
      Test.assertSimilar(tailAndHead([111,2345,66,78,900]) , 7293);
      Test.assertSimilar(tailAndHead([35456,782,569,2454,875]) , 12012);
     
    });
  });
  