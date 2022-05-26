import sys
read = sys.stdin.readline

n = int(read())

a = list(map(int, read().split()))
# 해당 숫자까지 최대 길이
dp = [0]*len(a)

for i in range(n):
    for j in range(i):
        # 자기 앞에 있는 수가 자기보다 작고
        # 거기까지의 최대 길이가 자기보다 클 때 바꿈
        if a[i] > a[j] and dp[i] < dp[j]:
            dp[i] = dp[j]
    # 자기 자신 포함하기
    dp[i] += 1

print(max(dp))
