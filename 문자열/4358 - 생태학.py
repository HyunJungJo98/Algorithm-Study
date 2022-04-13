import sys
from collections import defaultdict
read = sys.stdin.readline


dic = defaultdict(int)
cnt = 0
while True :
    a = read().rstrip('\n')
    if not a :
        break
    dic[a] += 1
    cnt += 1
li = list(dic.items())
li.sort()

for i in range(len(li)) :
    key = li[i][0]
    print("%s %.4f" % (key, dic[key]/cnt*100))