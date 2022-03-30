import sys
read = sys.stdin.readline

tc = int(read())

def bellmanFord():
    global isPossible

    for i in range(1, n+1):
        for j in range(1, n+1):
            for new_node, weight in g[j] :
                if d[new_node] > weight + d[j] :
                    d[new_node] = weight + d[j]
                    if i == n :
                        isPossible = False


for _ in range(tc) :
    n, m, w = map(int, read().split())
    g = [[] for _ in range(n+1)]
    d = [987654321] * (n+1)
    d[1] = 0
    for _ in range(m) :
        s, e, t = map(int, read().split())
        g[s].append([e, t])
        g[e].append([s, t])
    
    for _ in range(w) :
        s, e, t = map(int, read().split())
        g[s].append([e, -t])
    
    isPossible = True

    bellmanFord()
    
    print("NO" if isPossible else "YES")