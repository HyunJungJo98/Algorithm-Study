import sys
read = sys.stdin.readline

# https://castlerain.tistory.com/100
n, m = map(int, read().split())
arr = []

for i in range(n):
    arr.append(list(map(int, read().split())))

dp = [[0] * (n+1) for _ in range(n+1)]

for i in range(n):
    for j in range(n):
        dp[i+1][j+1] = dp[i][j+1] + dp[i+1][j] - dp[i][j] + arr[i][j]
for i in range(m):
    x1, y1, x2, y2 = map(int, read().split())
    print(dp[x2][y2] - dp[x1-1][y2] - dp[x2][y1-1]+dp[x1-1][y1-1])
