module.exports = function(n) {
    max = 0
    for (var x = 100; x < 1000; ++x) {
        for (var y = 100; y < 1000; ++y) {
            var str = (x*y).toString();
            if (str === str.split("").reverse().join("") && x*y > max) {
                max = x*y;
            }
        }
    }
    return max;
};