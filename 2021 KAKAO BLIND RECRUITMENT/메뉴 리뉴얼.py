orders = ["XYZ", "XWY", "WXA"]
course = [2, 3, 4]

dic = {}
result = []

for i in range(len(course)):
    dic[course[i]] = {}


def dfs(start, string, num):
    if len(result) == num:
        result.sort()
        if ''.join(result) in dic[num]:
            dic[num][''.join(result)] += 1
        else:
            dic[num][''.join(result)] = 1
        return
    for i in range(start, len(string)):
        result.append(string[i])
        dfs(i+1, string, num)
        result.pop()


for i in range(len(course)):
    for j in range(len(orders)):
        a = list(orders[j])
        a.sort()
        dfs(0, ''.join(a), course[i])

result2 = []
print(dic)
# 2, 3, 4
for i in dic.keys():
    max_num = 0
    if dic[i].values():
        max_num = max(dic[i].values())
    if max_num == 1:
        max_num = 0

    for j in dic[i].keys():
        if dic[i][j] == max_num:
            result2.append(j)

result2.sort()
print(result2)
