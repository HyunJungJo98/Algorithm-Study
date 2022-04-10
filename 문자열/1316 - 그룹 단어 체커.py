import sys
read = sys.stdin.readline

n = int(read())
cnt = 0

for i in range(n) :
    word = read().strip()
    arr = []
    result = True
    for i in range(1, len(word)) :
        if word[i] != word[i-1] :
            if word[i-1] in arr :
                result = False
                break
            else :
                arr.append(word[i-1])
    if result :
        if word[-1] in arr :
            result = False
    if result :
        cnt += 1

print(cnt)
        
