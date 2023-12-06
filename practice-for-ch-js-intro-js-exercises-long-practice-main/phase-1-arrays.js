Array.prototype.uniq = function(){
    let arr = [];
    this.forEach(function(ele){
        if (!arr.includes(ele)) {
            arr.push(ele)
        }
    }
    )
    return arr
}
// console.log([1,2,2,3,3,3].uniq())

Array.prototype.twoSum = function(){
    let arr = [];
    for (let i = 0; i < this.length - 1; i++ ) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) 
            arr.push([i, j]);
        }
    }
    return arr
}

// console.log([-1, 0, 2, -2, 1].twoSum())

Array.prototype.transpose = function(){
    let arr = [];
    for(let row = 0; row < this[0].length; row++) {
        let newArr = [];
        for (col = 0; col < this.length; col++) {
            newArr.push(this[col][row])
        }
        arr.push(newArr)
    }
    return arr
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())

