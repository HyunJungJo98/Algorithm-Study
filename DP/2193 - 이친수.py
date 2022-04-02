import sys
read = sys.stdin.readline

s = [0, 1, 1]

for i in range(3, 91):
    s.append(s[i-2] + s[i-1])
n = int(read())
print(s[n])