record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo",
          "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

dic = {}
result = []

for i in range(len(record)):
    nickname = ''
    if record[i][0] == 'L':
        action, id = record[i].split(' ')
    else:
        action, id, nickname = record[i].split(' ')
    if nickname != '':
        dic[id] = nickname
    result.append([action, id])

print(dic)
print(result)
answer = []

for i in range(len(result)):
    if result[i][0] == 'Enter':
        answer.append(dic[result[i][1]]+"님이 들어왔습니다.")
    elif result[i][0] == 'Leave':
        answer.append(dic[result[i][1]]+"님이 나갔습니다.")

print(answer)
