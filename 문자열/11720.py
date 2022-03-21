import sys

read = sys.stdin.readline

n = int(read())

li = list(map(int, read().strip()))

print(sum(li))
