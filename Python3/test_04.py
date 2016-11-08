def solution():
    max = 0
    for x in range(100,1000):
        for y in range(100,1000):
            s = str(x*y)
            if s == s[::-1] and x*y > max:
                max = x*y
    return max

def test_LargestPalindromeProduct():
    assert solution() == 906609