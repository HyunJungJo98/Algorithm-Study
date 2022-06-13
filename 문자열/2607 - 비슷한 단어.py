import sys
read = sys.stdin.readline

n = int(read())
s = read().strip()

dic = {}

for i in range(len(s)):
    if s[i] in dic:
        dic[s[i]] += 1
    else:
        dic[s[i]] = 1

cnt = 0
for i in range(n-1):
    a = read().strip()
    if len(a) > len(s) + 1 or len(a) < len(s) - 1:
        continue
    dic2 = dic.copy()
    for j in range(len(a)):
        if a[j] in dic2:
            dic2[a[j]] -= 1
        else:
            dic2[a[j]] = -1
    # dic2 : 양수면 s에만 있는 것, 음수면 a에만 있는 것
    change = [0, 0]
    result = True
    for key in dic2.keys():
        if dic2[key] == 0:
            continue
        if dic2[key] == 1:
            change[0] += 1
        elif dic2[key] == -1:
            change[1] += 1
        else:
            result = False

    if sum(change) > 2:
        result = False
    elif change[0] > 2 or change[1] > 2:
        result = False

    if result:
        cnt += 1


print(cnt)
