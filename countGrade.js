function countGrade(scores){
    //coding here...
    var array = [];
    for (var i=0 ;i<scores.length;i++){
      var a= scores[i];
      if (a == 100){
        array.push("S");
      }else if(a<100 && a >= 90){
        array.push("A");
      }else if (a<90 && a>=80){
        array.push("B");
      }else if (a<80 && a>=60){
        array.push("C");
      }else if (a<60 && a>=0){
        array.push("D");
      }else if (a == "-1"){
         array.push("X");
      }else {
       continue;
      }
    }
    var obj = {S:0, A:0, B:0, C:0, D:0, X:0};
      for(var key in obj){
        obj[key] = count(array,key);
      }
    return obj;
  }
  
  function count(arr,str){
    return arr.filter(x=>x==str).length;
  }




//sample tests

  describe("Tests", () => {
    it("test", () => {
      assertCheck(countGrade([50,60,70,80,90,100]) , {S:1, A:1, B:1, C:2, D:1, X:0});
      assertCheck(countGrade([65,75,,85,85,95,100,100]) , {S:2, A:1, B:2, C:2, D:0, X:0});
      assertCheck(countGrade([-1,-1,-1,-1,-1,-1]) , {S:0, A:0, B:0, C:0, D:0, X:6});
  
    });
  });
