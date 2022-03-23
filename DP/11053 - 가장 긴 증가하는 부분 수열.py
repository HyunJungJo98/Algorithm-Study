import sys
read = sys.stdin.readline

n = int(read())

a = list(map(int, read().split()))
b = [0]

b.append(a[0])

for i in range(1, n) :
    if a[i] > b[len(b)-1] :
        b.append(a[i])
    elif a[i] > b[len(b)-2] :
        b.pop()
        b.append(a[i])

print(b)
print(len(b)-1)