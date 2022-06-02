import sys
read = sys.stdin.readline

n, k = map(int, read().split())

things = [[0, 0]]
knapsack = [[0] * (k+1) for _ in range(n+1)]

for i in range(n):
    w, v = map(int, read().split())
    things.append([w, v])

for i in range(1, n+1):
    weight = things[i][0]
    value = things[i][1]
    for j in range(1, k+1):
        if j < weight:
            knapsack[i][j] = knapsack[i-1][j]
        else:
            knapsack[i][j] = max(value + knapsack[i - 1]
                                 [j - weight], knapsack[i - 1][j])

print(knapsack[n][k])
