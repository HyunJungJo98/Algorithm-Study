import sys
read = sys.stdin.readline

n = int(read())

dic = {}

for i in range(n):
    file = read().strip().split('.')

    if file[1] in dic:
        dic[file[1]].append(file[0])
    else:
        dic[file[1]] = [file[0]]

keys = list(dic.keys())
keys.sort()

for key in keys:
    print(key, len(dic[key]))
