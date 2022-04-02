import sys
read = sys.stdin.readline

n = int(read())
s = []

for i in range(n) :
    s.append(int(read()))

s.sort()

print(s)