import sys
read = sys.stdin.readline

n, m = map(int, read().split())

trees = list(map(int, read().split()))

left = 1
right = max(trees)

while left<=right :
    mid = (left+right)//2
    result = 0
    for i in range(n) :
        if trees[i] > mid :
            result += trees[i] - mid
    # >=으로 하기
    if result >= m :
        left = mid+1
    else :
        right = mid-1
print(left, right)
