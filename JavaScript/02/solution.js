function evenFibSum(a, b, sum) {
	var c = a + b;
	if (c >= 4000000) return sum;
	if (c % 2 === 0) sum += c;
	return evenFibSum(b, c, sum);
}

module.exports = function() {
	return evenFibSum(1, 1, 0);
};