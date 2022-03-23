import sys
read = sys.stdin.readline

dp = [0]

dp.append(1)
dp.append(2)
for i in range(3, 1001) :
    dp.append(dp[i-2] + dp[i-1])

n = int(read())
print(dp[n]%10007)

'''
안 됨
dp = [0] * (n+1)

dp[1] = 1
dp[2] = 2
for i in range(3, n+1) :
    dp[i] = dp[i-2] + dp[i-1]
'''