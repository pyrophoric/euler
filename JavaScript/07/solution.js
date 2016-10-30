module.exports = function(n) {
    var primes = [];
    var div = 2;
    var failed, i, sqrt;
    while (true) {
        failed = false;
        sqrt = Math.sqrt(div);
        for (i = 0; i < primes.length; ++i) {
            if (primes[i] > sqrt) break;
            if (div % primes[i] === 0) {
                failed = true;
                break;
            }
        }
        if (!failed) {
            primes.push(div);
            if (primes.length >= 10001) return primes[10000];
        }
        ++div;
    }
};