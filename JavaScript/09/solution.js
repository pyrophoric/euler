module.exports = function(n) {
    for (var a = 1; a < 998; ++a) {
        for (var b = a; b < 998; ++b) {
            for (var c = b; c < 998; ++c) {
                if (a * a + b * b === c * c &&
                    a + b + c === 1000) return a * b * c;
            }
        }
    }
};