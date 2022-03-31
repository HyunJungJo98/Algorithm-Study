import sys
read = sys.stdin.readline

s = read().strip()

dic = {}

for i in range(26):
    dic[chr(i+97)] = -1

for i in range(len(s)):
    if dic[s[i]] == -1 or dic[s[i]] > i:
        dic[s[i]] = i

print(' '.join(map(str, dic.values())))
