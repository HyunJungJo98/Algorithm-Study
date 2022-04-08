s = 'aaaa'

result = []
current = ''

for i in range(len(s)) :
    if len(result) > 0 and result[-1] == s[i]:
        result.pop()
    else :
        result.append(s[i])
print(result)
if len(result) == 0 :
    print(1)
else :
    print(0)
