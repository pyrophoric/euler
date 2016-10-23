module.exports = function(n) {
    var largest = 1, div = 2;
    while (n > 1) {
    	while (n % div === 0) {
            if (div > largest) largest = div;
            n /= div;
        }
        div += 1
        if (div * div > n) {
            if (n > 1 && n > largest) largest = n;
            break;
    	}
    }
    return largest;
};