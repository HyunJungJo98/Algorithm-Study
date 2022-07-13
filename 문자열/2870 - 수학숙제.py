import sys
read = sys.stdin.readline

n = int(read())
arr = []

for i in range(n):
    s = read().strip()
    stack = []
    for j in range(len(s)):
        if s[j].isnumeric():
            stack.append(s[j])
        else:
            if stack:
                arr.append(int(''.join(stack)))
                stack = []
    if stack:
        arr.append(int(''.join(stack)))

arr.sort()

for i in range(len(arr)):
    print(arr[i])
