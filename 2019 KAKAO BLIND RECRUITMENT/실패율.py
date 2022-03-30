n = 5
stages = [2, 1, 2, 6, 2, 4, 3, 3]

result = [0]*(max(stages)+1)

# result : index번호의 스테이지에 도달한 사용자 수를 담은 배열
for i in range(len(stages)):
    result[stages[i]] += 1

print(result)

# answer : [실패율, 스테이지]를 담은 배열
answer = []
for i in range(1, n+1):
    print(result[i], sum(result[i:]))
    # 스테이지에 도달한 유저가 없는 경우(0으로 나눠야하는 경우)는 0으로 설정
    if sum(result[i:]) == 0:
        answer.append([0, i])
    else:
        answer.append([result[i]/sum(result[i:]), i])

print(answer)
# 실패율을 내림차순으로 정렬, 확률이 같으면 스테이지 오름차순으로 정렬
answer.sort(key=lambda x: (-x[0], x[1]))

# 스테이지만 빼서 배열 만들기
answer2 = [answer[i][1] for i in range(len(answer))]

print(answer2)
