
import sys
read = sys.stdin.readline

n = int(read())

a = [0] * 10001

for i in range(n):
    a[int(read())] += 1

for i in range(len(a)):
    if a[i] != 0:
        for j in range(a[i]):
            print(i)
