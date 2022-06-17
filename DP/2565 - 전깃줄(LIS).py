import sys
read = sys.stdin.readline

n = int(read())
line = [0] * 501

for i in range(n):
    a, b = map(int, read().split())
    line[a] = b

dp = [0] * 501
for i in range(1, len(dp)):
    for j in range(1, i):
        if line[i] > line[j] and dp[j] > dp[i]:
            if line[j] == 0:
                continue
            dp[i] = dp[j]
    dp[i] += 1

print(n - max(dp))
