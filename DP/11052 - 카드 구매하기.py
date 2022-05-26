import sys
read = sys.stdin.readline

n = int(read())
p = [0]
p.extend(list(map(int, read().split())))

if n == 1:
    print(p[1])
    exit()
elif n == 2:
    print(max(p[1]*2, p[2]))
    exit()

dp = [0, p[1], max(p[1]*2, p[2])]

for i in range(3, len(p)):
    mid = i // 2
    start = 1
    m = p[i]
    while start <= mid:
        if m < dp[start] + dp[i-start]:
            m = dp[start] + dp[i-start]
        start += 1
    dp.append(m)

print(dp[-1])
