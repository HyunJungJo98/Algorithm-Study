import sys
read = sys.stdin.readline

n = int(read())
dic = {}
for i in range(n):
    book = read().strip()
    if book in dic:
        dic[book] += 1
    else:
        dic[book] = 1

keys = list(dic.keys())
keys.sort()

best = 0
best_book = ''
for i in range(len(keys)):
    if dic[keys[i]] > best:
        best_book = keys[i]
        best = dic[keys[i]]

print(best_book)
