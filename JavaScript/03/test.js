var assert   = require('assert'),
    solution = require('./solution.js');

describe('03: Largest prime factor', function() {
	it('Test case 1', function() {
      assert.equal(solution(600851475143), 6857);
    });
	it('Test case 2', function() {
      assert.equal(solution(726348962), 363174481);
    });
	it('Test case 3', function() {
      assert.equal(solution(6728933453445), 7120564501);
    });
	it('Test case 4', function() {
      assert.equal(solution(304891), 599);
    });
	it('Test case 5', function() {
      assert.equal(solution(1), 1);
    });
});