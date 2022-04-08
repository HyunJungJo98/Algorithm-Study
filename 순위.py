n = 5
results = [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]

win = {}
loose = {}

for i in range(1, n+1) :
    win[i] = set()
    loose[i] = set()

for i in results :
    win[i[0]].add(i[1])
    loose[i[1]].add(i[0])
    
for i in range(1, n+1) :
    for j in win[i] :
        loose[j].update(loose[i])
    for j in loose[i] :
        win[j].update(win[i])

result = 0
for i in range(1, n+1) :
    if len(win[i]) + len(loose[i]) == n-1 :
        result += 1
print(result)