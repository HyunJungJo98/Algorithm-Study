dirs = "UDU"

# graph = [[0] * 6 for _ in range(6)]
# graph[0][0] = 1
# print(graph)

# x, y = 0, 0
# cnt = 1
# for i in range(len(dirs)) :
#     print(x, y)
#     if dirs[i] == 'U' :
#         if x >= 5 or y >= 5 or x <= -5 or y <=-5 :
#             continue
#         elif graph[x][y] == 0 or graph[x][y+1] == 0 :
#             cnt +=1
#         graph[x][y+1] = 1
#         y += 1

#     elif dirs[i] == 'R' :
#         if x >= 5 or y >= 5 or x <= -5 or y <=-5 :
#             continue
#         elif graph[x][y] == 0 or graph[x+1][y] == 0 :
#             cnt +=1
#         graph[x+1][y] = 1
#         x += 1

#     elif dirs[i] == 'D' :
#         if x >= 5 or y >= 5 or x <= -5 or y <=-5 :
#             continue
#         elif graph[x][y] == 0 or graph[x][y-1] == 0 :
#             cnt +=1
#         graph[x][y-1] = 1
#         y -= 1

#     elif dirs[i] == 'L' :
#         if x >= 5 or y >= 5 or x <= -5 or y <=-5 :
#             continue
#         elif graph[x][y] == 0 or graph[x-1][y] == 0 :
#             cnt +=1
#         graph[x-1][y] = 1
#         x -= 1

# print(cnt)

visit = set()
x = 0; y = 0
for d in dirs:
    if d == 'U' and y < 5:
        visit.add(((x, y), (x, y+1)))
        y += 1
        
    elif d == 'D' and y > -5:
        visit.add(((x, y-1), (x, y)))
        y -= 1
        
    elif d == 'R' and x < 5:
        visit.add(((x, y), (x+1, y)))
        x += 1
        
    elif d == 'L' and x > -5:
        visit.add(((x-1, y), (x, y)))
        x -= 1

print(visit)
print(len(visit))