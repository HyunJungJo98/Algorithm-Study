import sys
read = sys.stdin.readline

n, l = map(int, read().split())
arr = []
for i in range(n):
    arr.append(list(map(int, read().split())))

answer = 0
# 가로 확인


def check(arr):
    for i in range(1, n):
        print('i:', i)
        if abs(arr[i] - arr[i-1]) > 1:
            return False

        # 내리막길일 때
        if arr[i] < arr[i-1]:
            for j in range(l):
                # 범위를 넘어서거나, 이미 설치되어 있거나, 높이가 다른 경우
                if i + j >= n or visited[i+j] == 1 or arr[i] != arr[i+j]:
                    return False
                if arr[i] == arr[i + j]:
                    visited[i+j] = 1
        # 오르막길일 때
        elif arr[i] > arr[i-1]:
            for j in range(l):
                if i - j < 0 or visited[i-1-j] == 1 or arr[i-1] != arr[i-1-j]:
                    return False
                if arr[i-1] == arr[i - 1 - j]:
                    visited[i-1-j] = 1
        # 같으면 그냥 넘어감

    return True


anwer = 0
# 가로 확인
for i in range(n):
    visited = [0] * n
    if check(arr[i]):
        answer += 1

# 세로 확인
arr = list(zip(*arr[::-1]))
for i in range(n):
    visited = [0] * n
    if check(arr[i]):
        answer += 1

print(answer)
