from math import sqrt

def solution():
    primes = []
    div = 2
    while True:
        failed = False
        sq = sqrt(div)
        for i in range(0, len(primes)):
            if primes[i] > sq: break
            if div % primes[i] == 0:
                failed = True
                break
        if not failed:
            primes.append(div)
        div += 1
        if div >= 2000000: break

    return sum(primes)

def test_SummationOfPrimes():
    assert solution() == 142913828922