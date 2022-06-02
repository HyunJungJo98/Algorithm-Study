import sys
read = sys.stdin.readline

n = int(read())

dp = [i for i in range(n+1)]

for i in range(1, n+1):
    s = []
    for j in range(1, i):
        # i보다 작은 제곱수 구하기
        if j*j > i:
            break
        # i를 만들 수 있는 모든 방법을 구해서 그 중 제일 작은 것
        if dp[i] > dp[i-j*j] + 1:
            dp[i] = dp[i-j*j] + 1

print(dp[-1])
