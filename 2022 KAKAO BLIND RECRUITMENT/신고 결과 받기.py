id_list = ["muzi", "frodo", "apeach", "neo"]
report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
k = 2

dic = {}
result = {}

for i in range(len(id_list)):
    # 내가 신고한 사람, 나를 신고한 사람
    dic[id_list[i]] = [set(), set()]
    result[id_list[i]] = 0

for i in range(len(report)):
    a, b = report[i].split()
    dic[a][0].add(b)
    dic[b][1].add(a)

reported = []

for key in dic.keys():
    if len(dic[key][1]) >= k:
        reported.append(key)

for i in range(len(reported)):
    for key in dic.keys():
        if reported[i] in dic[key][0]:
            result[key] += 1

result2 = []
for key in result.keys():
    result2.append(result[key])

print(result2)
