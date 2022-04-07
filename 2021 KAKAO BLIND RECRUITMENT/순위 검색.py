from bisect import bisect_left
from itertools import combinations


info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150",
        "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"]
query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200",
         "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]

dic = {}

for i in range(len(info)):
    a = info[i].split()
    key = a[:-1]
    score = a[-1]

    # 점수를 제외하고 모든 조합 구하기
    for j in range(5):
        for c in combinations(key, j):
            tmp = ''.join(c)
            if tmp in dic:
                dic[tmp].append(int(score))
            else:
                dic[tmp] = [int(score)]

for i in dic:
    dic[i].sort()

result = []
for qu in query:
    qu = qu.replace("and ", "")
    qu = qu.replace("-", "")
    qu = qu.split()
    key = ''.join(qu[:-1])
    score = int(qu[-1])
    cnt = 0

    if key in dic:
        score_list = dic[key]
        # 내가 찾는 값 이상인 값을 찾아줌
        idx = bisect_left(score_list, score)
        cnt = len(score_list) - idx
    result.append(cnt)

print(result)

# 효율성 X
'''
dic = {}
dic['score'] = {}
dic['-'] = set()

for i in range(len(info)):
    a = info[i].split(' ')
    for j in range(4):
        if a[j] not in dic:
            dic[a[j]] = set()
            dic[a[j]].add(i)
        else:
            dic[a[j]].add(i)
    dic['score'][i] = int(a[4])
    dic['-'].add(i)

print(dic)
result = []
for i in range(len(query)):
    a = query[i].split(' ')
    b = ''.join(a[:-1]).split('and')
    b.append(a[-1])
    print(b)
    result1 = dic[b[0]] & dic[b[1]] & dic[b[2]] & dic[b[3]]
    result1 = list(result1)
    print(result1)
    cnt = 0
    for j in result1:
        print(dic['score'][j])
        if dic['score'][j] >= int(b[4]):
            cnt += 1
    result.append(cnt)

print(result)
'''
