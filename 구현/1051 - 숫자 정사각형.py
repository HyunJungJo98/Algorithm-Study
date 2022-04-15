import sys

read = sys.stdin.readline

n, m = map(int, read().split())
s = []

for i in range(n):
    s.append(list(map(int, read().strip())))

if n > m:
    length = m
else:
    length = n

result = 1

for i in range(2, length+1):
    for j in range(n):
        for k in range(m):
            if k+i-1 < m and j+i-1 < n:
                current = s[j][k]
                one = s[j][k+i-1]
                two = s[j+i-1][k]
                three = s[j+i-1][k+i-1]
                # print(current, one, two, three)
                # print(result)
                if current == one == two == three:
                    result = i

print(result**2)
