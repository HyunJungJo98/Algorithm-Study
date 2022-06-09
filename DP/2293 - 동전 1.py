import sys
read = sys.stdin.readline

n, k = map(int, read().split())
coin = []
dp = [0] * (k+1)
dp[0] = 1

for i in range(n):
    c = int(read())
    if c <= k:
        coin.append(c)

if len(coin) == 0:
    print(0)
    exit()

for i in range(1, len(coin)+1):
    arr = [1]
    for j in range(1, k+1):
        if j >= coin[i-1]:
            arr.append(dp[j] + arr[j-coin[i-1]])
        else:
            arr.append(dp[j])
        # print(graph)
    dp = arr
    # print(dp)

print(arr[-1])
