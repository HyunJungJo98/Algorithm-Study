import sys
read = sys.stdin.readline

n = int(read())
dp = [0] * (n+1)

if n % 2 == 1:
    print(0)
    exit()

dp[2] = 3
for i in range(4, n+1):
    dp[i] = dp[2] * dp[i-2]
    for j in range(4, i, 2):
        dp[i] += 2 * dp[i-j]
    dp[i] += 2

print(dp[n])
