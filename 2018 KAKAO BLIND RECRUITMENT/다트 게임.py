
dartResult = "1D2S3T*"

current = -1
arr = []

for i in range(len(dartResult)):
    print(current)
    if dartResult[i].isnumeric():
        if dartResult[i] == '0' and dartResult[i-1] == '1':
            continue
        if dartResult[i+1].isnumeric():
            arr.append(int(dartResult[i]+dartResult[i+1]))
            current += 1
        else:
            print(dartResult[i])
            arr.append(int(dartResult[i]))
            current += 1
    elif dartResult[i] == 'S':
        arr[current] = arr[current] ** 1
    elif dartResult[i] == 'D':
        arr[current] = arr[current] ** 2
    elif dartResult[i] == 'T':
        arr[current] = arr[current] ** 3
    elif dartResult[i] == '#':
        arr[current] = arr[current] * (-1)
    elif dartResult[i] == '*':
        if current == 2:
            for j in range(1, current+1):
                arr[j] = arr[j]*2
        else:
            for j in range(current+1):
                arr[j] = arr[j]*2

        print(arr)

print(arr)
print(sum(arr))
