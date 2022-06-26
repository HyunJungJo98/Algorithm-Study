import heapq
import sys
read = sys.stdin.readline

n = int(read())
h = []

for i in range(n):
    x = int(read())
    if x == 0:
        if h:
            print(heapq.heappop(h))
        else:
            print(0)
    else:
        heapq.heappush(h, x)
