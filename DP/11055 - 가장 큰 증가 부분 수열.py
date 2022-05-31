import sys
read = sys.stdin.readline

n = int(read())
a = list(map(int, read().split()))
dp = [0] * n
dp[0] = a[0]

for i in range(n):
    for j in range(i):
        if a[i] > a[j]:
            dp[i] = max(dp[i], dp[j] + a[i])
        else:
            dp[i] = max(dp[i], a[i])

print(max(dp))
