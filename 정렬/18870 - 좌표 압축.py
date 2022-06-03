
import sys
read = sys.stdin.readline

n = int(read())

x = list(map(int, read().split()))

s = list(set(x))
s.sort()

dic = {}

for i in range(len(s)):
    dic[s[i]] = i

for i in range(n):
    print(dic[x[i]], end=' ')
