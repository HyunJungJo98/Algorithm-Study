prim = []
answer = 0


def check(num):
    for i in range(2, num//2+1):
        if num % i == 0:
            return False
    return True


def dfs(nums, arr, start, visited):
    global answer, prim
    if len(arr) == 3:
        num = sum(arr)
        a = ''.join(map(str, sorted(arr)))
        if a not in prim:
            if check(num):
                prim.append(a)
                answer += 1
        return
    for i in range(start, len(nums)):
        if visited[i] == 0:
            arr.append(nums[i])
            visited[i] = 1
            dfs(nums, arr, start + 1, visited)
            arr.pop()
            visited[i] = 0


def solution(nums):
    visited = [0] * len(nums)
    dfs(nums, [], 0, visited)

    return answer
