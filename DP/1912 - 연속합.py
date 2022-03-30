import sys
read = sys.stdin.readline

n = int(read())
a = list(map(int, read().split()))

dp = [a[0]]

for i in range(n-1) :
    dp.append(max(dp[i]+a[i+1], a[i+1]))

'''
for i in range(n) :
    dp.append(a[i])
    for j in range(i+1, n) :
        a[i] = a[i] + a[j]
        dp[i] = max(dp[i], a[i])
'''

print(max(dp))