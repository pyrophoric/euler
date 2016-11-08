def solution():
    for a in range(1,998):
        for b in range(a, 998):
            for c in range(b, 998):
                if a*a + b*b == c*c and a + b + c == 1000:
                    return a * b * c

def test_SpecialPythagoreanTriplet():
    assert solution() == 31875000