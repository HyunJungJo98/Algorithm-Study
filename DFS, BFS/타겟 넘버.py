import sys
read = sys.stdin.readline

numbers=[1, 1, 1, 1, 1]
target = 3

minus = [0] * len(numbers)
visited = [0] * len(numbers)

cnt = 0

def solution(numbers, target):
    dfs(0, 0, numbers, target)
    answer = cnt
    return answer

def dfs(start, result, numbers, target):
    global cnt
    
    if(start == len(numbers)) :
        if(result == target) :
            cnt +=1
        return
    else :
        dfs(start+1, result+numbers[start], numbers, target)
        dfs(start+1, result-numbers[start], numbers, target)

print(solution(numbers, target))