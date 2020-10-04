exports.min = function min(array) {
    let isEmpty = arguments.length;
    if (isEmpty === 0 || array.length === 0) {
        return 0;
    } else {
        return Math.min.apply(null, array);
    }
};

exports.max = function max(array) {
    let isEmpty = arguments.length;
    if (isEmpty === 0 || array.length === 0) {
        return 0;
    } else {
        return Math.max.apply(null, array);
    }
};

exports.avg = function avg(array) {
    let isEmpty = arguments.length;
    if (isEmpty === 0 || array.length === 0) {
        return 0;
    } else {
        let sumAllChar = array.reduce((acc, item) => acc + item);
        return sumAllChar / array.length;
    }
};