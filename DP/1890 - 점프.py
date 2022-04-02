import sys
read = sys.stdin.readline

n = int(read())
a = []

for i in range(n) :
    a.append(list(map(int, read().split())))

dp = [[0]*n for _ in range(n)]

dp[0][0] = 1
for i in range(n) :
    for j in range(n) :
        if a[i][j] == 0 :
            continue
        if a[i][j]+i < n :
            dp[a[i][j]+i][j] += dp[i][j]
        if a[i][j]+j < n :
            dp[i][a[i][j]+j] += dp[i][j]

print(dp[n-1][n-1])