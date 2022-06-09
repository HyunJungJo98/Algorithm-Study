import sys
read = sys.stdin.readline

n, k = map(int, read().split())

if n == k or k == 0:
    print(1)
    exit()

dp = [[1] * 1 for i in range(n+1)]

# i : n
for i in range(1, n+1):
    # j : k
    for j in range(1, i+1):
        if j == i:
            dp[i].append(1)
        else:
            dp[i].append(dp[i-1][j-1] + dp[i-1][j])

# print(dp)
print(dp[n][k] % 10007)
