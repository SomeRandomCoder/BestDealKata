var assert = require('assert');
var Fruit = require('./Fruition.js');

// describe("sortFruits", function(jsonFruits){
//   it("should sort the data into fruit categories and display the shops that sell it", function(){
//       var result = Fruit.sortFruits(
//         {
//         "woolingsworth": {
//           "apples": 4,
//           "bananas": 3,
//           "oranges": 12
//         },
//
//         "chockers": {
//           "bananas": 2,
//           "apples": 5,
//           "oranges": 4
//         },
//
//         "pickle pay": {
//           "bananas": 4,
//           "oranges": 7
//         },
//
//         "shopwrong": {
//           "apples": 2,
//           "bananas": 3
//         },
//
//         "kwakspar": {
//           "oranges": 9,
//           "apples": 4
//         }
//       });
//       assert.equal(result,
//
//         [ { shop: 'woolingsworth', price: 4 },
//         { shop: 'chockers', price: 5 },
//         { shop: 'shopwrong', price: 2 },
//         { shop: 'kwakspar', price: 4 } ],
//
//       [ { shop: 'woolingsworth', price: 12 },
//         { shop: 'chockers', price: 4 },
//         { shop: 'pickle pay', price: 7 },
//         { shop: 'kwakspar', price: 9 } ],
//
//       [ { shop: 'woolingsworth', price: 3 },
//         { shop: 'chockers', price: 2 },
//         { shop: 'pickle pay', price: 4 },
//         { shop: 'shopwrong', price: 3 } ]
//     );
//   });
//
// });

describe("cheapestSeller",function(){
  it("should return the provider of the cheapest oranges",function(){
    var result = Fruit.cheapestSeller({
      "woolingsworth": {
        "apples": 4,
        "bananas": 3,
        "oranges": 12
      },
      "chockers": {
        "bananas": 2,
        "apples": 5,
        "oranges": 4
      },
      "picklepay": {
        "bananas": 4,
        "oranges": 7
      },
      "shopwrong": {
        "apples": 2,
        "bananas": 3
      },
      "kwakspar": {
        "oranges": 9,
        "apples": 4
}
      });
    assert.equal(result,"chockers");
  });
});

describe("ascending apples", function(){
  it("should return the sellers of apples and the prices in ascending order", function(){
      var result = Fruit.ascendingApples(
        {
        "woolingsworth": {
          "apples": 4,
          "bananas": 3,
          "oranges": 12
        },
        "chockers": {
          "bananas": 2,
          "apples": 5,
          "oranges": 4
        },
        "picklepay": {
          "bananas": 4,
          "oranges": 7
        },
        "shopwrong": {
          "apples": 2,
          "bananas": 3
        },
        "kwakspar": {
          "oranges": 9,
          "apples": 4
  }
});
      assert.equal(result,
        [
          {shop: "shopwrong", price: 2},
          {shop:"woolingsworth", price: 4},
          {shop: "kwakspar", price: 4},
          {shop: "chockers", price: 5}]
      );

  });

});

describe("descending apples", function(){
  it("should return the sellers of apples and the prices in descending order by price.", function(){
    var result = Fruit.descendingApples(
      {
   "woolingsworth": {
     "apples": 4,
     "bananas": 3,
     "oranges": 12
   },
   "chockers": {
     "bananas": 2,
     "apples": 5,
     "oranges": 4
   },
   "picklepay": {
     "bananas": 4,
     "oranges": 7
   },
   "shopwrong": {
     "apples": 2,
     "bananas": 3
   },
   "kwakspar": {
     "oranges": 9,
     "apples": 4
}
   });
   assert.deepEqual(result,
[ { shop: 'chockers', price: 5 },
{ shop: 'woolingsworth', price: 4 },
{ shop: 'kwakspar', price: 4 },
{ shop: 'shopwrong', price: 2 } ]
);
});
});



describe("cheapestFruit", function(){
  it("should return the sellers of the cheapes fruit and price.", function(){
      var result = Fruit.cheapestFruit(
        {
     "woolingsworth": {
       "apples": 4,
       "bananas": 3,
       "oranges": 12
     },
     "chockers": {
       "bananas": 2,
       "apples": 5,
       "oranges": 4
     },
     "picklepay": {
       "bananas": 4,
       "oranges": 7
     },
     "shopwrong": {
       "apples": 2,
       "bananas": 3
     },
     "kwakspar": {
       "oranges": 9,
       "apples": 4
  }
     }

      );
      assert.equal(result,  "bananas");

  });

});

describe("cheapestFruitSeller", function(){
  it("should return the seller of the cheapest fruit.", function(){
      var result = Fruit.cheapestFruitSeller(
        {
     "woolingsworth": {
       "apples": 4,
       "bananas": 3,
       "oranges": 12
     },
     "chockers": {
       "bananas": 2,
       "apples": 5,
       "oranges": 4
     },
     "picklepay": {
       "bananas": 4,
       "oranges": 7
     },
     "shopwrong": {
       "apples": 2,
       "bananas": 3
     },
     "kwakspar": {
       "oranges": 9,
       "apples": 4
  }
     }

      );
      assert.equal(result,  "chockers and shopwrong");

  });

});

describe("orangeSeller",function(){
  it("should return the SELLERS of the oranges",function(){
    var result = Fruit.orangeSellers({
      "woolingsworth": {
        "apples": 4,
        "bananas": 3,
        "oranges": 12
      },
      "chockers": {
        "bananas": 2,
        "apples": 5,
        "oranges": 4
      },
      "picklepay": {
        "bananas": 4,
        "oranges": 7
      },
      "shopwrong": {
        "apples": 2,
        "bananas": 3
      },
      "kwakspar": {
        "oranges": 9,
        "apples": 4
}
      });
      assert.deepEqual(result,[ 'woolingsworth', 'chockers', 'picklepay', 'kwakspar' ]
);
  });
});
