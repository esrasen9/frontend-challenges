Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const value = callback(this[i], i, this);
        result.push(value);
    }
    return result;
}

//Sample usage myMap
const array1 = [1, 2, 3, 4];
const a = array1.myMap((value, index, arr) => {
    return (value + index + arr[1]);
});
console.log(a);

Array.prototype.myFilter = function (callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        const isPossible = callback(this[i], i, this);
        if (isPossible === true) filteredArray.push(this[i]);
    }
    return filteredArray;
}

//Sample usage myFilter
const array2 = [-1, 4, 5, -10];
const b = array2.myFilter((value, index, arr) => {
    return (value + index + arr[1] > 0);
});
console.log(b);

Array.prototype.myReduce = function (callback, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        (acc === undefined && i === 0) ?
            acc = this[i]
            : acc = callback(acc, this[i], i, this);
    }
    return acc;
}

//Sample usage myReduce
const array3 = [7, 17, 27, 37];
const c = array1.myReduce((accumulator, value, index, arr) => {
    return (accumulator + value + index + arr[1]);
}, 4);
console.log(c);