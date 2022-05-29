arr = ['me', 'ss', 'a', 'ge']

result = []
answer = 0
while len(arr) != 1:
    for i in range(1, len(arr)):
        result.append(len(arr[i]) + len(arr[i-1]))
    print(result, answer)
    answer += min(result)
    idx = result.index(min(result))
    arr[idx] = arr[idx] + arr[idx+1]
    arr.pop(idx+1)
    print(arr)
    result = []

print(answer)
