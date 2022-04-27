numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]
hand = "left"

graph = [[3, 1], [0, 0], [0, 1], [0, 2], [1, 0], [1, 1],
         [1, 2], [2, 0], [2, 1], [2, 2]]

result = ''
current = [[3, 0], [3, 2]]
for i in range(len(numbers)):
    a = numbers[i]
    if a == 1 or a == 4 or a == 7:
        result += 'L'
        current[0] = graph[a]
    elif a == 3 or a == 6 or a == 9:
        result += 'R'
        current[1] = graph[a]
    else:
        one = graph[a][0]
        two = graph[a][1]
        d1 = abs(one-current[0][0]) + abs(two-current[0][1])
        d2 = abs(one-current[1][0]) + abs(two-current[1][1])
        print(i, a, d1, d2, current, one, two)
        # 오른쪽 손이 더 가까울 때
        if d1 > d2:
            result += 'R'
            current[1] = graph[a]
        # 왼쪽 손이 더 가까울 때
        elif d1 < d2:
            result += 'L'
            current[0] = graph[a]
        # 거리가 같을 때
        else:
            if hand == "right":
                result += 'R'
                current[1] = graph[a]
            else:
                result += 'L'
                current[0] = graph[a]
print(result)
