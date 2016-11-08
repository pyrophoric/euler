def evenFibSum(a, b, sum):
    c = a + b
    if c >= 4000000: return sum
    if c % 2 == 0: sum += c
    return evenFibSum(b, c, sum)

def solution():
    return evenFibSum(1, 1, 0)

def test_EvenFibonacciNumbers():
    assert solution() == 4613732
