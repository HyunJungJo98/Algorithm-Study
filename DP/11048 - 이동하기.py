import sys
read = sys.stdin.readline

n, m = map(int, read().split())
candy = []
for i in range(n):
    candy.append(list(map(int, read().split())))

result = [[0] * m for _ in range(n)]
result[0][0] = candy[0][0]
for i in range(n):
    for j in range(m):
        if i == 0:
            if j == 0:
                continue
            else:
                result[i][j] = result[i][j-1] + candy[i][j]
        else:
            if j == 0:
                result[i][j] = result[i-1][j] + candy[i][j]
            else:
                result[i][j] = max(result[i][j-1], result[i-1]
                                   [j], result[i-1][j-1]) + candy[i][j]

print(result[-1][-1])
