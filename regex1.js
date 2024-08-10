var regex=/(http:\/\/|https:\/\/)[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*\.(com|net)/gi;


//  "/" == "\/"
// \. nokta zorunlu




//sample tests

describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar("http://codewars.com".match(regex), [ 'http://codewars.com' ]);
      Test.assertSimilar("http://www.codewars.com".match(regex), [ 'http://www.codewars.com' ]);
      Test.assertSimilar("HTTP://CODEWARS.COM".match(regex), [ 'HTTP://CODEWARS.COM' ]);
      Test.assertSimilar("https://www.codewars.com".match(regex), [ 'https://www.codewars.com' ]);
      Test.assertSimilar("http://www.codewars.net".match(regex), [ 'http://www.codewars.net' ]);
      Test.assertSimilar("1234http://www.codewars.comabcd".match(regex), [ 'http://www.codewars.com' ]);
      Test.assertSimilar("http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex), [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]);
      Test.assertSimilar("http://www.codewars1.comabchttp://www.codewars2.net".match(regex), [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]);
      Test.assertSimilar("http://www.codewars.com.net".match(regex), [ 'http://www.codewars.com.net' ]);
      Test.assertSimilar("http://www.codewars.com.fak".match(regex), [ 'http://www.codewars.com' ]);
      
      Test.assertSimilar("ftp://www.codewars.com".match(regex),null);
      Test.assertSimilar("http://www.code#wars.com".match(regex),null);
      Test.assertSimilar("http://www.codewars.org".match(regex),null);
      Test.assertSimilar("http://www . codewars . com".match(regex),null);
      Test.assertSimilar("http://mail@codewars.com".match(regex),null);
      Test.assertSimilar("http://.com".match(regex), null);
    });
  });
  