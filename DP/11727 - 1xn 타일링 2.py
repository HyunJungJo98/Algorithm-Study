import sys
read = sys.stdin.readline

n = int(read())

d = [1, 3]
for i in range(2, n):
    a = d[i-2]*2 + d[i-1]
    d.append(a)

print(d[n-1] % 10007)
