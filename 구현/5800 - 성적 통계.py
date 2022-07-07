import sys
read = sys.stdin.readline

k = int(read())
cnt = 1
for i in range(k):
    a = list(map(int, read().split()))
    num = a[0]
    a = a[1:]
    a.sort(reverse=True)
    ma = a[0]
    mi = a[-1]
    gap = 0
    for j in range(1, num):
        if a[j-1] - a[j] > gap:
            gap = a[j-1] - a[j]
    print('Class', cnt)
    print('Max', str(ma) + ', Min', str(mi) + ', Largest gap', gap)
    cnt += 1
