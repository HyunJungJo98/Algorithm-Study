import sys
read = sys.stdin.readline

t = int(read())

a = 300
b = 60
c = 10

num = [0, 0, 0]

while t > 0 :
    if t >= a :
        num[0] += t // a
        t = t % a
    elif t >= b :
        num[1] += t // b
        t = t % b
    elif t >= c :
        num[2] += t // c
        t = t % c
    else :
        break

if t == 0 :
    print(' '.join(map(str, num)))
else : 
    print(-1)