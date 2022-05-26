import sys
read = sys.stdin.readline

t = int(read())

for i in range(t):
    n = int(read())
    sticker = []
    sticker.append(list(map(int, read().split())))
    sticker.append(list(map(int, read().split())))
    dp = [[0] * n for _ in range(2)]

    if n == 1:
        print(max(sticker[0][0], sticker[1][0]))
        continue
    elif n == 2:
        print(max(sticker[0][0] + sticker[1][1], sticker[1][0]+sticker[0][1]))
        continue
    dp[0][0] = sticker[0][0]
    dp[1][0] = sticker[1][0]
    dp[0][1] = sticker[1][0] + sticker[0][1]
    dp[1][1] = sticker[0][0] + sticker[1][1]
    m = max(dp[0][0], dp[1][0])
    for j in range(2, n):
        for k in range(2):
            dp[k][j] = max(dp[abs(k-1)][j-1]+sticker[k]
                           [j], m + sticker[k][j])
        m = max(m, dp[0][j-1], dp[1][j-1])

    print(max(m, dp[0][-1], dp[1][-1]))
