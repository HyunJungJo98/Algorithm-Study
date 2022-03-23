import collections


from collections import deque
import sys
read = sys.stdin.readline

def bfs() :
    q = deque()
    copy = [[0] * m for i in range(n)]
    for i in range(n) :
        for j in range(m) :
            copy[i][j] = v[i][j]
            

n, m = map(int, read().split())

v = []

for _ in range(n) :
    v.append(list(map(int, read().split())))

print(v)