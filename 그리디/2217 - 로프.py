import sys
read = sys.stdin.readline

n = int(read())
r = []

for i in range(n) :
    r.append(int(read()))

r.sort()

w = []

for i in range(len(r)) :
    w.append(r[i] * (len(r)-i))

print(max(w))