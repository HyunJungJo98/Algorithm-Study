import sys
read = sys.stdin.readline

n = int(read())
a = list(map(int, read().split()))

result = [-1] * n
stack = []

# stack에 넣다가 stack의 top보다 큰 수가 나타날 때까지
# 오큰수를 그 큰 수로 설정
# 그 큰 수를 다시 stack에 넣음
for i in range(n):
    while stack and stack[-1][0] < a[i]:
        tmp, idx = stack.pop()
        result[idx] = a[i]
    stack.append([a[i], i])

print(*result)
