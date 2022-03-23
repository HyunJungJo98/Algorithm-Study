import sys
read = sys.stdin.readline

n, m = map(int, read().split())

bus = [[] for _ in range(n+1)]
d = [987654321] * (n+1)


for i in range(m) :
    a, b, c = map(int, read().split())
    bus[a].append([b, c])

d[1] = 0
start = 1

for i in range(n-1) :
    for j in range(1, len(bus)) :
        for k in range(len(bus[j])) :
            new_node = bus[j][k][0]
            new_w = bus[j][k][1]
            #1하고 연결이 안 되어 있으면 d[j] 무한대이므로
            #d[j]가 무한대이면 
            if(d[j] + new_w < d[new_node] and d[j] < 987654321) :
                d[new_node] = d[j] + new_w

num = 0

for j in range(1, len(bus)) :
    if num == -1 :
        break
    for k in range(len(bus[j])) :
        new_node = bus[j][k][0]
        new_w = bus[j][k][1]
        if(d[j] + new_w < d[new_node] and d[j] < 987654321) :
            a = d[new_node]
            d[new_node] = d[j] + new_w
            if(a != d[new_node]) :
                num = -1
                break


if (num == -1) :
    print(num)
else :
    for i in range(2, len(d)) :
        if d[i] >= 987654321 :
            print(-1)
        else :
            print(d[i])