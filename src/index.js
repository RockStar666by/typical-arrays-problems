exports.min = function min(array) {
    if (array == undefined || array == 0) return 0;
    let arr = array.sort((a, b) => (a - b));
    return arr[0];
}


exports.max = function max(array) {
    if (array == undefined || array == 0) return 0;
    let arr = array.sort((a, b) => (b - a));
    return arr[0];
}

exports.avg = function avg(array) {
    if (array == undefined || array == 0) return 0;
    let sum = 0;
    array.forEach(elem => sum += elem);
    return (sum / array.length);
}