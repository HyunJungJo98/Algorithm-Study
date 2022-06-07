import sys
read = sys.stdin.readline

n, k = map(int, read().split())

arr = []
for i in range(n):
    nat, gold, silver, bronze = map(int, read().split())
    arr.append([nat, gold, silver, bronze])

arr.sort(key=lambda x: (-x[1], -x[2], -x[3]))

cnt = 1
cnt2 = 1
for i in range(len(arr)):
    if i == 0:
        if arr[i][0] == k:
            break
        else:
            continue
    if arr[i][1] == arr[i-1][1] and arr[i][2] == arr[i-1][2] and arr[i][3] == arr[i-1][3]:
        cnt2 += 1
    else:
        cnt += cnt2
        cnt2 = 1

    if arr[i][0] == k:
        break

print(cnt)
