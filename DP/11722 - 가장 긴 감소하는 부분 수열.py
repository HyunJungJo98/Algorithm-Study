import sys
read = sys.stdin.readline

n = int(read())
a = list(map(int, read().split()))

dp = [0] * n

for i in range(n):
    for j in range(i):
        if a[i] < a[j] and dp[j] > dp[i]:
            dp[i] = dp[j]
    dp[i] += 1

print(max(dp))
