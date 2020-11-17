// @flow

function length(x) {
  return x.length;
}

var totalLength = length("Hello") + length(null);

function total(numbers: Array<number>) {
   var result = 0;
   for (var i = 0; i < numbers.length; i++) {
     result += numbers[i];
   }
   return result;
 }

total([1, 2, 3, "Hello"]);

function foo(x) {
  return x.length;
}

var res = foo("Hello") + foo(42);

