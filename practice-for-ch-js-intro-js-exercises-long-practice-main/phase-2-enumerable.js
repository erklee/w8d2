// Your code here
Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }

  };
  function callback(ele) {
    console.log((ele + "!"));
}
  ["a", "b","c"].myEach(ele => (callback(ele)))

Array.prototype.myMap = function(callback) {
    arr = []
    for (i = 0; i < this.length; i++) {
        arr.push(callback(this[i]));
    }
    return arr;


}
function callback2(ele) {
    return (ele*2);
}

console.log([1,2,3,4,5].myMap(callback2))



Array.prototype.myReduce = function (callback, acc) {
    const array = this.slice();
    if (typeof acc === 'undefined') {
      acc = array.shift();
    }
  
    array.myEach(el => {
      acc = callback(acc, el);
    });
  
    return acc;
  };
