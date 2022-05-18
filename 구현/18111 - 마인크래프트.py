import sys
read = sys.stdin.readline

n, m, b = map(int, read().split())
s = set()

graph = []

for i in range(n):
    arr = list(map(int, read().split()))
    graph.append(arr)

result = 9876543210
goal = 0
for i in range(257) :
    inven = b
    high = 0
    low = 0
    for j in range(n):
        for k in range(m) :
            cur = graph[j][k]
            if cur > i :
                # 다지기
                high += (cur - i)
            else :
                # 쌓기
                low += (i - cur)
    inven += high
    if inven < low :
        continue
    time = high*2 + low
    if time <= result :
        result = time
        goal = i

print(result, goal)