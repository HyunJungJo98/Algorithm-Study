import sys
from itertools import combinations

read = sys.stdin.readline

n, m = map(int, read().split())
graph = []

for i in range(n) :
    graph.append(list(map(int, read().split())))

house = []
chicken = []

for i in range(n) :
    for j in range(n) :
        if graph[i][j] == 1 :
            house.append([i, j])
        if graph[i][j] == 2 :
            chicken.append([i, j])

dis = combinations(chicken, m)

result = 100000000
for k in dis :
    min_result = 0
    for i, j in house :
        min_num = 100000000
        for x, y in k:
            min_num = min(min_num, abs(i-x) + abs(j-y))
        min_result += min_num
    result = min(result, min_result)

print(result)