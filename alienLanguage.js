function alienLanguage(str){
    //coding here...
    var words = str.split(" ");
    for (var i=0 ; i<words.length;i++){
        words[i]=words[i].slice(0,words[i].length-1).toUpperCase()+words[i][words[i].length-1].toLowerCase();
    }
    return words.join(" ")
  }



//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(alienLanguage("My name is John") , "My NAMe Is JOHn");
      Test.assertSimilar(alienLanguage("this is an example") , "THIs Is An EXAMPLe");
      Test.assertSimilar(alienLanguage("Hello World") , "HELLo WORLd");
      Test.assertSimilar(alienLanguage("HELLO WORLD") , "HELLo WORLd");
  
    });
  });