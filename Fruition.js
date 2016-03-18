 var jsonFruits = {

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

  exports.cheapestSeller = function(jsonFruits){
    jsonFruits.oranges.sort(function(a, b){
    return a.price - b.price;
  });

  console.log(jsonFruits.oranges[0]);
  return jsonFruits.oranges[0];
 };

 exports.ascendingApples = function(apples){
   jsonFruits.apples.sort(function(a, b){
   return a.price - b.price;
 });
 console.log(jsonFruits.apples);
 };

 exports.descendingApples = function(apples){
   jsonFruits.apples.sort(function(a, b){
     return b.price - a.price;
   })
   console.log(jsonFruits.apples);

 };

 exports.cheapestFruit = function(jsonFruits){
   var fruits = [];
var total = 0;
var total1 =0;
var total2 =0;

for (i=0; i<jsonFruits.length; i++)
{
 total += jsonFruits.apples[i].price;
 total1 += jsonFruits.bananas[i].price;
 total2 += jsonFruits.oranges[i].price;
}

      fruits.push({
        Apples: total},
        {Bananas: total1},
        {Oranges: total2
      });


      for (var y = 0; y < fruits.length; y++){
        fruits.sort();
      }
      console.log(fruits[0]);
      return fruits[0];


   console.log(fruits);


 };
