function range(a, b) {
    return [...Array(b-a).keys()].map(x => x + a);
}

Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
}

module.exports = function(n) {
    var sumOfSquares = range(1,101).map(x => x*x).sum();
    var squareOfSum = Math.pow(range(1,101).sum(), 2);
    return squareOfSum - sumOfSquares;
};