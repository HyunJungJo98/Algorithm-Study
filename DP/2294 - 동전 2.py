import sys
read = sys.stdin.readline

n, k = map(int, read().split())
coin = []

for i in range(n):
    c = int(read())
    coin.append(c)

dp = [10001] * (k+1)
dp[0] = 0

for i in range(len(coin)):
    cur = coin[i]
    for j in range(cur, k+1):
        dp[j] = min(dp[j], dp[j-cur]+1)

if dp[-1] == 10001:
    print(-1)
else:
    print(dp[-1])
