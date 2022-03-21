array = [1, 5, 2, 6, 3, 7, 4]
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

result = []
for i in range(len(commands)) :
    a, b, c = commands[i][0], commands[i][1], commands[i][2]
    d = array[a-1:b]
    d.sort()
    result.append(d[c-1])
print(result)