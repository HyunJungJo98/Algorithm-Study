import sys
read = sys.stdin.readline

n, m, b = map(int, read().split())
s = set()
dic = {}

for i in range(n):
    arr = map(int, read().split())
    s.update(arr)
    print(s)
