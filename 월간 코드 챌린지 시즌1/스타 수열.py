from collections import Counter

a = [0,3,3,0,7,2,0,2,2,0]

counter = Counter(a)

answer = -1

for x in counter.keys() :
    if counter[x] <= answer :
        continue
    i = 0
    cnt = 0
    while i < len(a)-1 :
        if a[i] == a[i+1] or (a[i] != x and a[i+1] != x) :
            i += 1
        else :
            cnt += 1
            i += 2
    answer = max(answer, cnt)

if len(a) < 4 :
    answer = 0

print(answer*2)