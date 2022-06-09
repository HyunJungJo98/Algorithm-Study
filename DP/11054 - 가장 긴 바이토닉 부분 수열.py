import sys
read = sys.stdin.readline

# 바이토닉 수열 : 증가했다가 감소하는 수열
# 연속된 값이 있으면 안 됨

n = int(read())
a = list(map(int, read().split()))

dp = [0] * n

for i in range(n):
    for j in range(i):
        if a[i] > a[j] and dp[j] > dp[i]:
            dp[i] = dp[j]
    dp[i] += 1

reverse_dp = [0] * n

for i in range(n-1, -1, -1):
    for j in range(n-1, i, -1):
        if a[i] > a[j] and reverse_dp[j] > reverse_dp[i]:
            reverse_dp[i] = reverse_dp[j]
    reverse_dp[i] += 1

for i in range(n):
    dp[i] += reverse_dp[i]

print(max(dp)-1)
