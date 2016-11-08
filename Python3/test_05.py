from multiprocessing import Pool
import time

THREADS = 8
BATCH_SIZE = 10000000

def worker(x):
    for y in range(x,x+BATCH_SIZE):
        failed = False
        for z in range(1,21):
            if y % z != 0:
                failed = True
                break
        if not failed: return y
    return 0

def solution():
    x = 1
    while True:
        with Pool(THREADS) as p:
            result = p.map(worker, range(x, x + BATCH_SIZE * THREADS, BATCH_SIZE))
            for i in result:
                if i != 0: return i
        x += BATCH_SIZE * THREADS

def test_SmallestMultiple():
    assert solution() == 232792560
