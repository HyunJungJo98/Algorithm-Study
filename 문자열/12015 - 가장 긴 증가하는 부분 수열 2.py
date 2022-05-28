import sys
read = sys.stdin.readline

n = int(read())
a = list(map(int, read().split()))
dp = [0]

for i in range(n):
    if dp[-1] < a[i]:
        dp.append(a[i])
    else:
        left = 0
        right = len(dp)
        while left < right:
            mid = (left + right)//2
            if dp[mid] < a[i]:
                left = mid + 1
            else:
                right = mid
        dp[right] = a[i]

print(len(dp)-1)
