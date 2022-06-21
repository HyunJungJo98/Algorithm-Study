import sys
read = sys.stdin.readline

t = int(read())

# 오퍼레이터 순서 조합


def dfs(arr, n):
    if len(arr) == n-1:
        operator.append(arr.copy())
        return

    arr.append(' ')
    dfs(arr, n)
    arr.pop()

    arr.append('+')
    dfs(arr, n)
    arr.pop()

    arr.append('-')
    dfs(arr, n)
    arr.pop()


for i in range(t):
    n = int(read())
    operator = []
    dfs([], n)
    integer = [i for i in range(1, n+1)]

    for j in range(len(operator)):
        string = ''
        # 숫자 순서는 그대로이므로 숫자 뒤에 오퍼레이터 끼워 넣기
        for k in range(n-1):
            string += str(integer[k]) + operator[j][k]
        # 마지막 숫자 넣기
        string += str(integer[-1])
        # eval : 문자열 그대로 계산
        if eval(string.replace(' ', '')) == 0:
            print(string)
    print()
