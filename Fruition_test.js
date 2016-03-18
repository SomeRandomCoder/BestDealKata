var assert = require('assert');
var Fruit = require('./Fruition.js');

describe("cheapest oranges", function(){
    it("should find the cheapest seller of oranges", function(){
      var result = Fruit.cheapestSeller(
        {

       "apples":
       [
         {shop:"woolingsworth", price: 4},
         {shop: "chockers", price: 5},
         {shop: "shopwrong", price: 2},
         {shop: "kwakspar", price: 4}
       ],
       "bananas":
       [
         {shop: "woolingsworth", price: 3},
         {shop: "chockers", price:2},
         {shop: "pickle pay", price: 4},
         {shop: "shopwrong", price:3}

       ],
       "oranges":
       [
         {shop:"woolingsworth", price: 12},
         {shop: "chockers", price: 4},
         {shop: "pickle pay", price:7},
         {shop: "kwakspar", price: 9}
       ]

       }
      );
      assert.deepEqual(result, {shop: "chockers", price: 4});
    });
});

describe("ascending apples", function(){
  it("should return the sellers of apples and the prices in ascending order", function(){
      var result = Fruit.ascendingApples(
        {
       "apples":
       [
         {shop:"woolingsworth", price: 4},
         {shotp: "chockers", price: 5},
         {shop: "shopwrong", price: 2},
         {shop: "kwakspar", price: 4}
       ],
       "bananas":
       [
         {shop: "woolingsworth", price: 3},
         {shop: "chockers", price:2},
         {shop: "pickle pay", price: 4},
         {shop: "shopwrong", price:3}
       ],
       "oranges":
       [
         {shop:"woolingsworth", price: 12},
         {shop: "chockers", price: 4},
         {shop: "pickle pay", price:7},
         {shop: "kwakspar", price: 9}
       ]
       }

      );
      assert.equal = (result,
        [
          {shop: "shopwrong", price: 2},
          {shop: "kwakspar", price: 4},
          {shop:"woolingsworth", price: 4},
          {shop: "chockers", price: 5},
        ]
      );

  });

});






describe("descending apples", function(){
  it("should return the sellers of apples and the prices in descending order by price.", function(){
      var result = Fruit.descendingApples(
        {
       "apples":
       [
         {shop:"woolingsworth", price: 4},
         {shotp: "chockers", price: 5},
         {shop: "shopwrong", price: 2},
         {shop: "kwakspar", price: 4}
       ],
       "bananas":
       [
         {shop: "woolingsworth", price: 3},
         {shop: "chockers", price:2},
         {shop: "pickle pay", price: 4},
         {shop: "shopwrong", price:3}
       ],
       "oranges":
       [
         {shop:"woolingsworth", price: 12},
         {shop: "chockers", price: 4},
         {shop: "pickle pay", price:7},
         {shop: "kwakspar", price: 9}
       ]
       }

      );
      assert.equal = (result,
        [
          {shop: "chockers", price: 5},
          {shop:"woolingsworth", price: 4},
          {shop: "kwakspar", price: 4},
          {shop: "shopwrong", price: 2},
        ]
      );

  });

});



describe("cheapestFruit", function(){
  it("should return the sellers of the cheapes fruit and price.", function(){
      var result = Fruit.cheapestFruit(
        {
       "apples":
       [
         {shop:"woolingsworth", price: 4},
         {shop: "chockers", price: 5},
         {shop: "shopwrong", price: 2},
         {shop: "kwakspar", price: 4}
       ],
       "bananas":
       [
         {shop: "woolingsworth", price: 3},
         {shop: "chockers", price:2},
         {shop: "pickle pay", price: 4},
         {shop: "shopwrong", price:3}
       ],
       "oranges":
       [
         {shop:"woolingsworth", price: 12},
         {shop: "chockers", price: 4},
         {shop: "pickle pay", price:7},
         {shop: "kwakspar", price: 9}
       ]
       }

      );
      assert.equal = (result,  1);

  });

});
