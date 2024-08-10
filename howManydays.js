function howManydays(month){
    var days;
    switch (month){
        case (1):
        case (3):
        case (5):
        case (7):
        case (8):
        case (10):
        case (12):
        days=31;
        return days;
        case (4):
        case (6):
        case (9):
        case (11):
        days=30;
        return days;
        case (2):
        days=28;
        return days;
    }
    return days;
  }



//sample tests

  describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(howManydays(1),31);
      Test.assertSimilar(howManydays(2),28);
      Test.assertSimilar(howManydays(3),31);
      Test.assertSimilar(howManydays(4),30);
      Test.assertSimilar(howManydays(12),31);
    });
  });