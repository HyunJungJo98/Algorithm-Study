s = "{{20,111},{111}}"
s = s[1:-1]
s = s.split('},')
a = []
for i in range(len(s)):
    a.append(s[i][1:].split(','))
    if i == len(s)-1:
        a[i][-1] = a[i][-1][:-1]

a.sort(key=len)
result = []
for i in range(len(a)):
    for j in range(len(a[i])):
        if int(a[i][j]) not in result:
            result.append(int(a[i][j]))

print(result)
