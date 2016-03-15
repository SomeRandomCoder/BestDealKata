var assert=require("assert");
var Avo = require("./Avo.js");

describe("converting", function(){
  it ("should split/divide the string and join it by a ',' ,and then remove the 'R' sign and 'for' word.", function(){
    var result = Avo.converting("1 for R3, 2 for R7, 3 for R10, 5 for R14.50");
    assert.deepEqual(result, ['1', '3', '2', '7', '3', '10', '5', '14.50']);

  });
});

describe("indexMap", function(){
  it("should return the price and quantity in each deal", function(){
        var result = Avo.indexMap(['1', '3', '2', '7', '3', '10', '5', '14.50']);
        assert.deepEqual(result,
      [{
        "Deal": 'One',
        "quantity": 1,
        "price ": 3
      },
      {
        "Deal": 'Two',
        "quantity": 2,
        "price ": 7
      },
      {
        "Deal": 'Three',
        "quantity": 3,
        "price": 10
      },
      {
        "Deal": 'Four',
        "quantity": 5,
        "price": 14.50

      }]);
  });
});


describe("perAvoPrice", function(){
  it("should return the price of one avo in each deal", function(){
        var result = Avo.perAvoPrice(amountIndex);
        assert.deepEqual(result, ['3.00', '3.50', '3.33', '2.90']);
  });
});

describe("Cheapest Deal", function(){
  it("should return the cheapest deal of all Deals", function(){
      var result = Avo.cheapestDeal(array);
      assert.equal(result, "2.90");
  });
});

describe("Expensive Deal", function(){
      it("should return the most expensive deal of all deals", function(){
          var result = Avo.expensiveDeal(array); //
          assert.equal(result, "3.50");
        });
  });

  describe ("averagePrice", function(){
      it("should return the average price throughout all deals",function(){
        var result = Avo.averagePrice(array);
        assert.equal(result, "3.1825");
      });
  });
