module.exports = function(n) {
    var x = 20;
    var y = 1;
    var failed;
    while (true) {
        failed = false;
        for (y = 1; y < 21; ++y) {
            if (x % y !== 0) {
                failed = true;
                break;
            }
        }
        if (!failed) {
            return x;
        }
        ++x;
    }
}