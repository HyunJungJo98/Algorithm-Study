n = 4
left = 7
right = 14

graph = []

for i in range(int(left), int(right)+1) :
    row = i%n
    col = i//n
    if row <= col :
        graph.append(col+1)
    else :
        graph.append(row+1)

print(graph)