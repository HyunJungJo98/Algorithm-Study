import sys
read = sys.stdin.readline

a = []
num = [x for x in range(10000)]
s = []

for i in range(10000) :
    a = list(str(i))
    s.append(sum(list(map(int, a))) + i)

s.sort()

for i in range(10000) :
    if num[i] not in s :
        print(num[i])