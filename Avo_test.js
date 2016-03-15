var assert=require("assert");
var Avo = require("./Avo.js");

describe("converting", function(){
  it ("should split/divide the string and join it by a ',' ,and then remove the 'R' sign and 'for' word.", function(){
    var result = Avo.converting("1 for R3, 2 for R7, 3 for R10, 5 for R14.50");
    assert.deepEqual(result, ['1', '3', '2', '7', '3', '10', '5', '14.50']);

  });
});

describe("indexMap", function(){
  it("should return the price and quantity of Avos in each deal", function(){
        var result = Avo.indexMap(['1', '3', '2', '7', '3', '10', '5', '14.50']);
        assert.deepEqual(result,
    [ { quantity: 1, price: 3 },
      { quantity: 2, price: 7 },
      { quantity: 3, price: 10 },
      { quantity: 5, price: 14.5 } ]);
  });
});


describe("perAvoPrice", function(){
  it("should return the price of one avo in each deal", function(){
        var result = Avo.perAvoPrice(
          [ { quantity: 1, price: 3 },
            { quantity: 2, price: 7 },
            { quantity: 3, price: 10 },
            { quantity: 5, price: 14.5 } ]
          );//amountIndex OR result from previous function
        assert.deepEqual(result, ['3.00', '3.50', '3.33', '2.90']);
  });
});

describe("Cheapest Deal", function(){
  it("should return the cheapest deal of all Deals", function(){
      var result = Avo.cheapestDeal([ { quantity: 1, price: 3 },
        { quantity: 2, price: 7 },
        { quantity: 3, price: 10 },
        { quantity: 5, price: 14.5 } ]
      );
      assert.equal(result, "2.90");
  });
});

describe("Expensive Deal", function(){
      it("should return the most expensive deal of all deals", function(){
          var result = Avo.expensiveDeal(['3.00', '3.50', '3.33', '2.90']); //
          assert.equal(result, "3.50");
        });
  });

  describe ("averagePrice", function(){
      it("should return the average price throughout all deals",function(){
        var result = Avo.averagePrice(array);
        assert.equal(result, "3.1825");
      });
  });
