import sys
read = sys.stdin.readline

n1, n2 = map(int, read().split())
g1 = read().strip()
g2 = read().strip()
t = int(read())
result = [0] * (n1+n2)

if t == 0:
    print(g1[::-1] + g2)
    exit()

g1 = list(g1[::-1])
g2 = list(g2)

ant = g1 + g2

for i in range(t):
    for j in range(n1+n2-1):
        if ant[j] in g1 and ant[j+1] in g2:
            ant[j], ant[j+1] = ant[j+1], ant[j]
            if ant[j+1] == g1[-1]:
                break
print(''.join(ant))
