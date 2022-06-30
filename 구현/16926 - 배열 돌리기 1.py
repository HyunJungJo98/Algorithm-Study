from re import A
import sys
read = sys.stdin.readline

n, m, r = map(int, read().split())

arr = []
for i in range(n):
    arr.append(list(map(int, read().split())))

if r >= (n-1)*2 + (m-1)*2:
    r = r % ((n-1)*2 + (m-1)*2)


def rotate(arr, w, h, startx, starty):
    s = arr[starty][w-1+startx]
    for i in range(w-1+startx, startx, -1):
        temp = arr[starty][i-1]

        arr[starty][i-1] = s
        s = temp

    for i in range(starty+1, h+starty):
        temp = arr[i][startx]
        arr[i][startx] = s
        s = temp

    for i in range(startx+1, w+startx):
        temp = arr[h-1+starty][i]
        arr[h-1+starty][i] = s
        s = temp

    for i in range(h-2+starty, starty-1, -1):
        temp = arr[i][w-1+startx]
        arr[i][w-1+startx] = s
        s = temp


for i in range(r):
    w = m
    h = n
    startx = 0
    starty = 0
    while w > 0 and h > 0:
        rotate(arr, w, h, startx, starty)
        w -= 2
        h -= 2
        startx += 1
        starty += 1

for i in range(len(arr)):
    print(*arr[i])
