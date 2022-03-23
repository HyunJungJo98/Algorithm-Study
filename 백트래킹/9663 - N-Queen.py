import sys

read = sys.stdin.readline

def dfs(a) :
    global count

    if a == n :
        count += 1
        return

    for i in range(n) :
        if visited[i] == 1 :
            continue
        
        chess[a] = i
        if check(a) :
            visited[i] = 1
            dfs(a+1)
            visited[i] = 0

def check(a) :
    for i in range(a) :
        if (chess[i] == chess[a]) or (a-i == abs(chess[a]-chess[i])):
            return False
    return True

n = int(read())
chess = [0] * n
visited = [0] * n
count = 0

dfs(0)
print(count)