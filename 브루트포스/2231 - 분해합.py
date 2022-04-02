import sys
read = sys.stdin.readline

n = int(read())
num = list(map(int, list(str(n))))

min = 0

for i in range(n) :
    a = list(map(int, list(str(i))))
    if i + sum(a) == n :
        min = i
        break

print(min)