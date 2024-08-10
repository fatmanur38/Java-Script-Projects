function findSimilarity(str,word){
    //coding here...
    var res =[]
    var words= str.split(" ");
    for(var i=0;i<words.length;i++){
      var regstr=words[i][0]+words[i].slice(1,-1).replace(/./g,".")+words[i].slice(-1);
      var reg = new RegExp("^"+regstr+"$");
      if(reg.test(word)){
        res.push(words[i])
      }
    }
    return res.join(" ");
  }


//sample test

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(findSimilarity("bag dog dig dot doog dogs","dog") , "dog dig");
      Test.assertSimilar(findSimilarity("bag dog dig dot doog dogs","dig") , "dog dig");
      Test.assertSimilar(findSimilarity("bag dog dig dot doog dogs","dot") , "dot");
      Test.assertSimilar(findSimilarity("bag dog dig dot doog dogs","god") , "");
      Test.assertSimilar(findSimilarity("vRllN QRo cUz gdI SImLC fyQhN Gzi PWzja SxTdC VlQ SdmKC ImF","SWyfC") , "SImLC SxTdC SdmKC");
      
    });
  });