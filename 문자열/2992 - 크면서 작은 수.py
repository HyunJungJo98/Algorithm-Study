import sys
read = sys.stdin.readline

num = int(read())
x = list(str(num))
x = list(map(int, x))

x.sort()
visited = [0] * len(x)
result = []


def dfs(arr):
    if len(arr) == len(x):
        a = int(''.join(map(str, arr)))
        if a > num:
            result.append(a)
        return

    for i in range(len(x)):
        if visited[i] == 0:
            arr.append(x[i])
            visited[i] = 1
            dfs(arr)
            arr.pop()
            visited[i] = 0


dfs([])
if result:
    print(min(result))
else:
    print(0)
