import sys
read = sys.stdin.readline

h, w = map(int, read().split())

block = list(map(int, read().split()))

cnt = 0
for i in range(w):
    if block[i] != 0:
        cnt += 1

if cnt < 2:
    print(0)
    exit()

result = 0
for i in range(1, w):
    start = 0
    end = 0
    if block[i] < block[i-1]:
        start = block[i-1]
        water = 0
        j = start + 1
        for j in range(start+1, w):
            if j != start + 1 and block[j] < block[j-1]:
                end = j-1
                break
        if end == 0:
            end = block[-1]
        stand = min(start, end)
        if j == w-1:
            j += 1
        for k in range(i, j):
            a = stand - block[k]
            if a < 0:
                continue
            else:
                water += a
        result += water

print(result)
