triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]

dp = [triangle[0]]

for i in range(1, len(triangle)):
    new_dp = []
    for j in range(len(triangle[i])):
        if j == 0:
            new_dp.append(dp[i-1][0] + triangle[i][j])
        elif j == len(triangle[i])-1:
            new_dp.append(dp[i-1][-1] + triangle[i][j])
        else:
            new_dp.append(max(dp[i-1][j-1]+triangle[i]
                          [j], dp[i-1][j]+triangle[i][j]))
    dp.append(new_dp)

print(max(dp[-1]))
