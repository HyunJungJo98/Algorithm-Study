import sys
read = sys.stdin.readline

t = int(read())

arr = []

for i in range(t) :
    n = int(read())
    if n == 0 :
        arr.append([1, 0])
    elif n == 1 :
        arr.append([0, 1])
    else : 
        dp = [[0] * 2 for _ in range(n+1)]
        dp[0][0] = 1
        dp[1][1] = 1
        dp[0][1] = 0
        dp[1][0] = 0
        for j in range(2, n+1) :
            dp[j][0] = dp[j-1][0] + dp[j-2][0]
            dp[j][1] = dp[j-1][1] + dp[j-2][1]
        arr.append([dp[n][0], dp[n][1]])

for i in range(t) :
    print(' '.join(map(str, arr[i])))