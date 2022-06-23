import sys
read = sys.stdin.readline

n = int(read())

number = [i for i in range(1, 10)]
li = []

for i in range(n):
    num, s, b = map(int, read().split())
    li.append([num, s, b])


def check(arr):
    for i in range(n):
        num = list(map(int, str(li[i][0])))
        s = li[i][1]
        b = li[i][2]
        s_ = 0
        b_ = len(set(num) & set(arr))
        for j in range(3):
            if int(num[j]) == arr[j]:
                s_ += 1
        b_ = b_ - s_
        if b != b_ or s != s_:
            return False
    return True


cnt = 0


def dfs(arr):
    global cnt
    if len(arr) == 3:
        if check(arr):
            cnt += 1
        return
    for i in range(len(number)):
        if number[i] in arr:
            continue
        else:
            arr.append(number[i])
            dfs(arr)
            arr.pop()


dfs([])
print(cnt)
