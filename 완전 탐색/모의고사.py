answers = [3, 3, 2, 1, 5]

s1 = [1, 2, 3, 4, 5]
s2 = [2, 1, 2, 3, 2, 4, 2, 5]
s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

cnt = [[0, 1], [0, 2], [0, 3]]

for i in range(len(answers)) :
    if answers[i] == s1[i%len(s1)] :
        cnt[0][0] += 1
    if answers[i] == s2[i%len(s2)] :
        cnt[1][0] += 1
    if answers[i] == s3[i%len(s3)] :
        cnt[2][0] += 1

cnt.sort(key=lambda x : (-x[0], x[1]))

print(cnt)
result = []
cnt_max = cnt[0][0]
result.append(cnt[0][1])

for i in range(1, len(cnt)) :
    if cnt[i][0] == cnt_max :
        result.append(cnt[i][1])

print(result)