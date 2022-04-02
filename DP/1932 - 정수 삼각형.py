import sys
read = sys.stdin.readline

n = int(read())
t = []

for i in range(n) :
    t.append(list(map(int, read().split())))

for i in range(1, n) :
    for j in range(len(t[i])) :
        if j == 0 :
            t[i][j] = t[i-1][j] + t[i][j]
        elif j == i :
            t[i][j] = t[i-1][j-1] + t[i][j]
        else :
            t[i][j] = max(t[i-1][j-1], t[i-1][j]) + t[i][j]

print(max(t[n-1]))