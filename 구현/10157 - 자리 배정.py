import sys
read = sys.stdin.readline

width, height = map(int, read().split())
k = int(read())

if k > width*height:
    print(0)
    exit()

arr = [[0]*width for _ in range(height)]

count = width + height
if width > height:
    count -= width-height
elif width < height:
    count -= height-width
else:
    count -= 1

xstart = 0
xend = width-1
ystart = height-1
yend = 0

direction = 0
number = 1
x, y = 0, 0
flag = 0
for i in range(count):
    if flag == 1:
        break
    if direction == 0:
        for j in range(ystart, yend-1, -1):
            arr[j][xstart] = number
            if number == k:
                x, y = xstart, j
                flag = 1
                break
            number += 1
        direction = (direction+1) % 4
        xstart += 1
        continue
    if direction == 1:
        for j in range(xstart, xend+1):
            arr[yend][j] = number
            if number == k:
                x, y = j, yend
                flag = 1
                break
            number += 1
        direction = (direction+1) % 4
        ystart, yend = yend+1, ystart
        continue
    if direction == 2:
        for j in range(ystart, yend+1):
            arr[j][xend] = number
            if number == k:
                x, y = xend, j
                flag = 1
                break
            number += 1
        direction = (direction+1) % 4
        xstart, xend = xend-1, xstart
        continue
    if direction == 3:
        for j in range(xstart, xend-1, -1):
            arr[yend][j] = number
            if number == k:
                x, y = j, yend
                flag = 1
                break
            number += 1
        direction = (direction+1) % 4
        ystart, yend = yend-1, ystart
        xstart, xend = xend, xstart
        continue

print(x+1, height-y)
