import sys
import heapq
read = sys.stdin.readline

h = []

n = int(read())

for i in range(n) :
    heapq.heappush(h, int(read()))

for i in range(n) :
    print(heapq.heappop(h))
