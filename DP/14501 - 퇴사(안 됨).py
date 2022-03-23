import sys
read = sys.stdin.readline

n = int(read())

t = [0] * n
p = [0] * n

for i in range(n) :
    num = list(map(int, read().split()))
    t[i] = num[0]
    p[i] = num[1]

dp = [0] * (n+1)

dp[n] = 0

for i in range(n-1, -1, -1) :
    if t[i] + i > n :
        #dp[i] = 0이면 안 되는데 이유를 모르겠음
        dp[i] = dp[i+1]
    else :
        dp[i] = max(dp[i+t[i]] + p[i], dp[i+1])

print(dp[0])