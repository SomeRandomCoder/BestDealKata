exports.jsonFruits = function(){
 var jsonFruits =
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

  "pickle pay": {
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
};
return jsonFruits;
};


// exports.sortFruits=function(jsonFruits){
//   var apples =[];
//   var oranges = [];
//   var bananas = [];
//
//   for (var shop in jsonFruits){
//     if(jsonFruits[shop].hasOwnProperty("oranges")) {
//       oranges.push({
//         'shop': shop,
//         'price': jsonFruits[shop].oranges
//       });
//     }
//   }
//
//   for (var shop in jsonFruits){
//   if(jsonFruits[shop].hasOwnProperty("apples")) {
//       apples.push({
//         'shop': shop,
//         'price': jsonFruits[shop].apples
//       });
//     }
//   }
//
//     for(var shop in jsonFruits){
//     if(jsonFruits[shop].hasOwnProperty("bananas")) {
//       bananas.push({
//         'shop': shop,
//         'price': jsonFruits[shop].bananas
//       });
//     }
//   }
//
//   // console.log(apples);
//   // console.log(oranges);
//   // console.log(bananas);
//   return apples;
//   return bananas;
//   return oranges;
// };


exports.cheapestSeller = function(jsonFruits) {
  var orangeProvider = [];
  for (var shop in jsonFruits) {
    if (jsonFruits[shop].hasOwnProperty("oranges")) {
      orangeProvider.push({
        'shop': shop,
        'price': jsonFruits[shop].oranges
      });
    }
  }
  var oranges = [];
  for (x = 0; x < orangeProvider.length; x++) {
    oranges.push(orangeProvider[x].price);
  }
  var min = Math.min.apply(Math, oranges);
  for (y = 0; y < orangeProvider.length; y++) {
    if (oranges[y] == min) {
      console.log(orangeProvider[y].shop + ": " + orangeProvider[y].price);
      return orangeProvider[y].shop;
    }
  }
};


 exports.ascendingApples = function(jsonFruits){
   var appleProvider = []

   for (var shop in jsonFruits) {
   if (jsonFruits[shop].hasOwnProperty("apples")) {
     appleProvider.push({
       'shop': shop,
       'price': jsonFruits[shop].apples
     });
   }
 }
   var ascending = appleProvider.sort(function(a, b){
    return a.price - b.price;
 });

 console.log(ascending);
 return ascending
 };

 exports.descendingApples = function(jsonFruits){
   var appleProvider = []

   for (var shop in jsonFruits) {
   if (jsonFruits[shop].hasOwnProperty("apples")) {
     appleProvider.push({
       'shop': shop,
       'price': jsonFruits[shop].apples
     });
   }
 }
   var descending = appleProvider.sort(function(a, b){
    return b.price - a.price;
 });

 console.log(descending);
 return descending
 };

//  exports.cheapestFruit = function(jsonFruits){
//    var fruits = [];
// var total = 0;
// var total1 =0;
// var total2 =0;
//
// for (i=0; i<jsonFruits.length; i++)
// {
//  total += jsonFruits.apples[i].price;
//  total1 += jsonFruits.bananas[i].price;
//  total2 += jsonFruits.oranges[i].price;
// }
//
//       fruits.push({
//         Apples: total},
//         {Bananas: total1},
//         {Oranges: total2
//       });
//
//
//       for (var y = 0; y < fruits.length; y++){
//         fruits.sort();
//       }
//       console.log(fruits[0]);
//       return fruits[0];
//
//
//    console.log(fruits);
//
//
//  };
