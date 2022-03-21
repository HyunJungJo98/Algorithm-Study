import sys
read = sys.stdin.readline

str = read().strip()

s = str.split('-')
a = []

for i in s :
    a.append(list(map(int, i.split('+'))))

total = sum(a[0])

for i in range(1, len(a)) :
    total -= sum(a[i])

print(total)