import sys
read = sys.stdin.readline

def dfs(start) :
    if len(stack) == 6 :
        print(' '.join(map(str, stack)))
        return
    
    for i in range(start, k) :
        stack.append(s[i])
        dfs(i+1)
        stack.pop()


while True :
    num = list(map(int, read().split()))
    k = num[0]
    if k == 0 :
        break
    s = num[1:]
    s.sort()

    stack = []

    dfs(0)
    print()