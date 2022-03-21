import sys
read = sys.stdin.readline

n, k = map(int, read().split())

graph = [[] for _ in range(100000)]
d = [987654321] * 100000
