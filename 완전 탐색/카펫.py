brown = 24
yellow = 24

size = brown + yellow

carpet = []
for i in range(1, size+1) :
    if size%i == 0 :
        h = size//i
        if i >= h :
            if h != 1 :
                carpet.append([i, size//i])

print(carpet)

def a() :
    for i in range(len(carpet)) :
        cnt = 0
        width = carpet[i][0]
        height = carpet[i][1]
        graph = [[0]*width for _ in range(height)]
        for j in range(height) :
            if j == 0 or j==height-1:
                continue
            for k in range(width) :
                if k==0 or k==width-1:
                    continue
                else :
                    graph[j][k] = 1
                    cnt += 1
        print(graph)
        if cnt == yellow :
            return(carpet[i])

print(a())