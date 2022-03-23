import sys
read = sys.stdin.readline

n = int(read())
p = []
r = [1]*n

for i in range(n) :
    p.append(list(map(int, read().split())))

for i in range(n) :
    for j in range(n) :
        if i == j :
            continue
        if p[i][0] < p[j][0] and p[i][1] < p[j][1] :
            r[i] += 1
            
print(' '.join(map(str, r)))