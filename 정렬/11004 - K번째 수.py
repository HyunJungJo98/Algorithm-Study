import heapq
import sys
read = sys.stdin.readline

n, k = map(int, read().split())

a = list(map(int, read().split()))

a.sort()

print(a[k-1])
