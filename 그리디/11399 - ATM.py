import sys
read = sys.stdin.readline

n = int(read())
p = list(map(int, read().split()))
p_sum = []

p.sort()

p_sum.append(p[0])
total = p[0]

for i in range(1, n) :
    total += p[i]
    p_sum.append(total)

print(sum(p_sum))