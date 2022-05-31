import sys
read = sys.stdin.readline

n = int(read())
if n == 1:
    print(10)
    exit()

dp = [1 for i in range(10)]

for i in range(n-1):
    dp2 = []
    for j in range(10):
        dp2.append(sum(dp[j:]) % 10007)
    dp = dp2
    #print(dp, dp2)

print(sum(dp) % 10007)
