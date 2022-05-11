import sys
read = sys.stdin.readline

n, m = map(int, read().split())
s = dict()
result = 0

for i in range(n) :
    s[read().strip()] = 0

for i in range(m) :
    compare = read().strip()
    if compare in s :
        result += 1

print(result)