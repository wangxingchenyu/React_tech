var ary1 = [11, 22, 33 , 44];
var ary2 = [1, 23, 34];
// var num= 2;
// ary2.unshift(num, 0);

Array.prototype.splice.apply(ary1, ary2);
console.log(ary1);



/*
 *
 *   bind ,apply ,call
 *
 *
 *
 */