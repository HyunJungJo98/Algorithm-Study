import sys
read = sys.stdin.readline

# b를 a로
a, b = map(int, read().split())

m = int(read())
num = list(map(int, read().split()))

d = 0
l = m - 1
for i in range(m):
    d += num[i] * (a**l)
    l -= 1

b_list = []
while d > 0:
    b_list.append(d % b)
    d = d // b

print(*b_list[::-1])
