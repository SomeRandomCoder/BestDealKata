
exports.converting = function(str){
   var step1 = str.split(', ').join(",").replace(/for /g, '');
   var step2 = step1.split(' ').join('');
   var step3 = step2.replace(/R/g, " ").split(" ").join(",").split(",");
    amountIndex = step3;
console.log(amountIndex);
  return amountIndex;
};


exports.indexMap=function(){
 var map ={}
  var quantity = [];
  var price = [];

  for (var i = 0; i < amountIndex.length; i++) {

    if(i % 2 === 0) { // index is even
        quantity.push(amountIndex[i]);
    }

}

for (var i = 1; i < amountIndex.length; i++) {
  if(i % 2 != 0) { // index is even
  { // index is even
      price.push(amountIndex[i]);
  }
}
};
console.log(quantity);
console.log(price);
return quantityValue;
return price;
};



//
//   for(var i = 0; i < amountIndex.length; i++){
//
//     if(i % 2 === 0 ){
//      var quantityValue = parseFloat(amountIndex[i]);
//     }
//
//    for(i = 0; i < amountIndex.length; i+=2)
//     {
//       var priceValue = parseFloat(amountIndex[i + 1]);
//     }
//
//   data.push({
//     quantity : Number(quantityValue),
//     price: Number(priceValue),
//   });
// };
//
//
//   console.log(data);
//   return data;

  exports.perAvoPrice = function(amountIndex){

  var quantityArray = [amountIndex[0],amountIndex[2],amountIndex[4],amountIndex[6]];
  var amountArray = [amountIndex[1],amountIndex[3],amountIndex[5],amountIndex[7]];

  var dealOne = amountArray[0] / quantityArray[0];
  var dl1 = dealOne.toFixed(2);
  var dealTwo = amountArray[1] / quantityArray[1];
  var dl2 = dealTwo.toFixed(2);
  var dealThree = amountArray[2] / quantityArray[2];
  var dl3 = dealThree.toFixed(2);
  var dealFour = amountArray[3] / quantityArray[3];
  var dl4 = dealFour.toFixed(2);

  array =[];
  array.push(dl1);
  array.push(dl2);
  array.push(dl3);
  array.push(dl4);
  console.log(array);
  return array;

};

exports.cheapestDeal = function(array) {

    var min = Math.min.apply( Math, array );
    console.log("Deal 4 :" + min.toFixed(2));
    return min;
 };

 exports.expensiveDeal = function(array){
   var max = Math.max.apply( Math, array );
   console.log("Deal 2 :" + max.toFixed(2));
   return max;
 };

 exports.averagePrice = function(array){
   var sum = eval(array.join('+'));  //The eval() function evaluates JavaScript code represented as a string.
   console.log("Total :" + sum.toFixed(2));
   var avg = sum / array.length;
   console.log("Average :" + avg.toFixed(2));
   return avg;
 };
//


//  for(var i = 0; i < amountIndex.length; i++){
//
//    if(i %2 == 0 ){
//     var quantityValue = parseFloat(amountIndex[i]);
//    }
//  };
//
//   for(var i = 0; i <amountIndex.length; i++){
//       if(i % 2 != 0)
//       {
//       var priceValue = parseFloat(amountIndex[i + 1]);
//       }
//
//     };
//   data.push({
// quantity:  quantityValue,
//   price: priceValue,
// }  );
// };

//
