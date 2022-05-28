a = [1, 9, 8, 3, 6, 3, 9, 5, 1, 4, 2]
dp = [0] * len(a)
redp = [0] * len(a)

for i in range(len(a)):
    for j in range(i):
        if a[i] > a[j] and dp[i] < dp[j]:
            dp[i] = dp[j]
    dp[i] += 1

for i in range(len(a)-1, -1, -1):
    for j in range(len(a)-1, i, -1):
        if a[i] > a[j] and redp[i] < redp[j]:
            redp[i] = redp[j]
    redp[i] += 1
print(dp, redp)

# 더했을 때 가장 큰 것에서 -1
