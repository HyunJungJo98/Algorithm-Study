import sys
read = sys.stdin.readline

n = int(read())

num = []

dp = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]

for i in range(n-1):
    c = [0]*10
    for j in range(10):
        if j == 0:
            c[0] = dp[1]
        elif j == 9:
            c[9] = dp[8]
        else:
            c[j] = dp[j-1] + dp[j+1]
    dp = c

print(sum(dp) % 1000000000)
