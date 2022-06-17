import sys
read = sys.stdin.readline

n = int(read())

dp = [1] * 3

# dp[0] : 위에 두 칸에 한 마리도 없을 때
# dp[1] : 위에 왼쪽 칸에 한 마리가 있을 때
# dp[2] : 위에 오른쪽 칸에 한 마리가 있을 때
for i in range(1, n+1):
    arr = []
    # 현재 줄에 한 마리도 없을 때 == 위 칸이 어떻든 상관 없음
    arr.append((dp[0] + dp[1] + dp[2]) % 9901)
    # 현재 줄 왼쪽 한 마리가 있을 때
    # == 위 칸에는 한 마리도 없거나 오른쪽에 있어야 함
    arr.append((dp[0] + dp[2]) % 9901)
    # 위에 오른쪽 칸에 한 마리가 있을 때
    arr.append((dp[0] + dp[1]) % 9901)

    dp = arr

print(dp[0] % 9901)
