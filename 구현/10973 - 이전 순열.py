import sys
read = sys.stdin.readline

n = int(read())
a = list(map(int, read().split()))

idx = 0
result = True

for i in range(n-1, 0, -1):
    if a[i] < a[i-1]:
        result = False
        idx = i
        break

if result:
    print(-1)
else:
    for i in range(n-1, 0, -1):
        if a[idx-1] > a[i]:
            a[idx-1], a[i] = a[i], a[idx-1]
            break
    b = sorted(a[idx:], reverse=True)
    print(*(a[:idx] + b))
