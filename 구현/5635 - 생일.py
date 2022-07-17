import sys
read = sys.stdin.readline

n = int(read())

bir = []
for i in range(n):
    a = read().split()
    b = map(int, a[1:])
    a = [a[0]]
    a.extend(b)
    bir.append(a)

bir.sort(key=lambda x: (x[3], x[2], x[1]))
print(bir[-1][0])
print(bir[0][0])
