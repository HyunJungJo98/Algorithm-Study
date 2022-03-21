import sys
read = sys.stdin.readline

n = int(read())

#[0] * (n+1)로 하면 안 됨
s = [0] * (301)

for i in range(1, n+1) :
    s[i] = int(read())

#[0] * (n+1)로 하면 안 됨
dp = [0] * (301)
dp[1] = s[1]
dp[2] = s[1] + s[2]
dp[3] = max(s[2]+s[3], s[1] + s[3])

for i in range(4, n+1) : 
    dp[i] = max(dp[i-3]+s[i-1]+s[i], dp[i-2]+s[i])

print(dp[n])