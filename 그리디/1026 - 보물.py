import sys
read = sys.stdin.readline

n = int(read())

a = list(map(int, read().split()))
b = list(map(int, read().split()))
s = []

a.sort()
b.sort(reverse=True)

for i in range(n) :
    s.append(a[i]*b[i])

print(sum(s))