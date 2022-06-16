import sys
read = sys.stdin.readline

n = int(read())
food = []

for i in range(n):
    s = read().split()
    food.append(s[1:])

food.sort()

answer = []
for i in range(n):
    # 맨 처음 줄은 무조건 겹치지 않으므로 그냥 붙이기
    if i == 0:
        for j in range(len(food[i])):
            answer.append('--'*j + food[i][j])
    else:
        # 겹치는 문자열 찾기 : 한 방향으로 쭉 내려가다가 두 갈래길이 나왔을 때
        idx = 0
        for j in range(len(food[i])):
            # 겹치지 않는 걸 찾았을 때 or 끝까지 다 겹칠 때 탈출
            if food[i-1][j] != food[i][j] or len(food[i-1]) <= j:
                break
            else:
                idx = j+1
        for j in range(idx, len(food[i])):
            answer.append('--'*j + food[i][j])

print('\n'.join(answer))
