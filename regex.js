var regex=/^-?9\d{0,}0{4,}$/

//"^" başlangıç
//? opsiyonel ya 1 tane olcak ya hiç
// d* or d{0,} hiç olmayadabilir oladabilir
//$ bitiş


//sample tests

describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(regex.test("90000") , true);
      Test.assertSimilar(regex.test("-90000") , true);
      Test.assertSimilar(regex.test("900000000") , true);
      Test.assertSimilar(regex.test("91230000") , true);
      Test.assertSimilar(regex.test("-91230000") , true);
      Test.assertSimilar(regex.test("190000") , false);
      Test.assertSimilar(regex.test("90001") , false);
      Test.assertSimilar(regex.test("9000") , false);
      Test.assertSimilar(regex.test("91230") , false);
      Test.assertSimilar(regex.test("1-90000") , false);
      Test.assertSimilar(regex.test("-90000123") , false);
      
    });
  });