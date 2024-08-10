function topSecret(str){
    //coding here...
    // 'A'=65
    // 'a'=97
    var result =""
    for (var i=0 ;i<str.length;i++){
      var ch = str[i]
      if (ch >= 'a' && ch <= 'z'){
        result += String.fromCharCode((ch.charCodeAt(0)-97-3+26)%26+97)
      }else if (ch >= 'A' && ch <= 'Z'){
        result += String.fromCharCode((ch.charCodeAt(0)-65-3+26)%26+65)
      }else{
        result += ch
      }
    }
    return result
  }
  //question1: The top secret file number is...
  answer1="2466";
  //question2: Super agent's name is...
  answer2="iynp";
  //question3: He stole the treasure is...
  answer3="Apple core";



//sample tests

  describe("Tests", () => {
    it("test", () => {
  //Fixed testcase only test the correctness
  //of the decryption code. 
  //The answer to the three question will appear 
  //only after clicking on "Submit".
      Test.assertSimilar(topSecret("Pb qdph lv Mrkq") , "My name is John");
      Test.assertSimilar(topSecret("wklv lv dq hadpsoh") , "this is an example");
      Test.assertSimilar(topSecret("Khoor Zruog!") , "Hello World!");
  
    });
  });