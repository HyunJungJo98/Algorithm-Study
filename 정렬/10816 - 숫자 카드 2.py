import sys
read = sys.stdin.readline

n = int(read())
num = list(map(int, read().split()))
m = int(read())
search = list(map(int, read().split()))

dic = {}

for i in range(len(num)):
    if num[i] not in dic:
        dic[num[i]] = 1
    else:
        dic[num[i]] += 1

for i in range(len(search)):
    try:
        print(dic[search[i]], end=' ')
    except:
        print(0, end=' ')
