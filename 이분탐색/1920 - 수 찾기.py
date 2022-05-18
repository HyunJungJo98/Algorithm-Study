import sys
read = sys.stdin.readline

n = int(read())
arr = []
arr = list(map(int, read().split()))
arr.sort()

m = int(read())
arr2 = list(map(int, read().split()))
for i in range(m) :
    num = arr2[i]
    left = 0
    right = n
    result = 0
    if num > arr[-1] or num < arr[0] :
        print(result)
        continue
    while left <= right:
        mid = (left+right)//2
        if num > arr[mid] :
            left = mid +1
        elif num < arr[mid] :
            right = mid-1
        else :
            result = 1
            break
    print(result)