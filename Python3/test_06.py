from math import pow

def solution():
    sumOfSquares = sum([x*x for x in range(1,101)])
    squareOfSum = pow(sum(range(1,101)), 2)
    return squareOfSum - sumOfSquares

def test_SumSquareDifference():
    assert solution() == 25164150
