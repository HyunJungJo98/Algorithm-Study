citations = [1,4]

citations.sort()
result = 0
for i in range(len(citations)) :
    if citations[i] >= len(citations) - i :
        result = len(citations) - i
        break
    result = 0
        

print(result)