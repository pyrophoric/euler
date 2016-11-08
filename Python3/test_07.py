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
            if len(primes) >= 10001: return primes[10000]
        div += 1

def test_10001stPrime():
    assert solution() == 104743