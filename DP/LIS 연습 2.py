arr = [3, 9, 12, 8, 7, 2, 6, 1, 4, 5, 10, 11]

dp = [0] * len(arr)

for i in range(len(arr)):
    for j in range(i):
        if arr[i] > arr[j] and dp[j] > dp[i]:
            dp[i] = dp[j]
    dp[i] += 1

print(len(arr) - max(dp))
