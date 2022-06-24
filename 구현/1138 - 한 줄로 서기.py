import sys
read = sys.stdin.readline

n = int(read())
h = list(map(int, read().split()))

result = [0] * n

for i in range(n):
    cnt = 0
    for j in range(n):
        # print(i, j, cnt, h[i])
        # print(result)
        if cnt == h[i] and result[j] == 0:
            result[j] = i+1
            break
        if result[j] == 0:
            cnt += 1
        else:
            continue

print(*result)
