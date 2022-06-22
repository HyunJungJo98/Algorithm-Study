import sys
read = sys.stdin.readline

n, k = map(int, read().split())

number = [0 for _ in range(n+1)]

cnt = 0
for i in range(2, n+1):
    for j in range(i, n+1, i):
        if number[j] == 0:
            number[j] = 1
            cnt += 1
        if cnt == k:
            print(j)
            break
    if cnt == k:
        break
