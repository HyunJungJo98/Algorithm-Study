import sys
read = sys.stdin.readline

n, m = map(int, read().split())
a = []
for i in range(n):
    a.append(list(map(int, read().split())))

m2, k = map(int, read().split())
b = []
for i in range(m2):
    b.append(list(map(int, read().split())))

graph = [[0] * k for _ in range(n)]
for i in range(n):
    for j in range(m2):
        for k_ in range(k):
            graph[i][k_] += (a[i][j] * b[j][k_])

for i in range(len(graph)):
    print(*graph[i])
