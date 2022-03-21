import sys
read = sys.stdin.readline
sys.setrecursionlimit(100000)

#for문 없이 다 탐색하는 방법
def dfs(index, sum_a) :
    global cnt
    if index >= n :
        return

    sum_a += a[index]

    if sum_a == s :
        cnt += 1
    
    #자기 자신이 합이 되는지 확인
    dfs(index+1, sum_a - a[index])
    #자기 자신부터 그 후의 숫자를 하나씩 합함, 찾으면 cnt+=1
    dfs(index+1, sum_a)
    
    
    

n, s = map(int, read().split())
a = list(map(int, read().split()))

b = []
cnt = 0

dfs(0, 0)

print(cnt)