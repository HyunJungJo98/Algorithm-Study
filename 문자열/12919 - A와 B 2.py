import sys
read = sys.stdin.readline

s = list(read().strip())
t = list(read().strip())

result = False


def dfs(t):
    global result
    if len(s) == len(t):
        if s == t:
            print(1)
            exit()
        return
    if t[0] == 'B':
        t.reverse()
        t.pop()
        dfs(t)
        t.append('B')
        t.reverse()
    if t[-1] == 'A':
        t.pop()
        dfs(t)
        t.append('A')


dfs(t)
print(0)
