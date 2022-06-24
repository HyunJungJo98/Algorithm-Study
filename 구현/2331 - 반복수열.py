import sys
read = sys.stdin.readline

a, p = map(int, read().split())

result = []
result.append(a)
while True:
    li = list(map(int, str(a)))
    sum = 0
    for i in range(len(li)):
        sum += (li[i] ** p)
    if sum in result:
        #print(result, result.index(sum))
        print(len(result[:result.index(sum)]))
        break
    else:
        result.append(sum)
    a = sum
