from collections import deque

s = "[](){}"

q = deque()

cnt = 0
for i in range(len(s)) :
    q.clear()
    cnt2 = 0
    cnt3 = 0
    cnt4 = 0
    for j in range(i, len(s)+i) :
        start = j % len(s)
        q.append(s[start])
        if s[start] == '(' :
            cnt2 += 1
        elif s[start] =='[' :
            cnt3 += 1
        elif s[start] == '{' :
            cnt4 += 1
        if ('(' in q and s[start] == ')') :
            for k in range(cnt2+1) :
                q.pop()
        elif ('[' in q and s[start] == ']') :
            for k in range(cnt3+1) :
                q.pop()
        elif ('{' in q and s[start] == '}') :
            for k in range(cnt4+1) :
                q.pop()
    if len(q) != 0 :
        cnt +=1

    print(q)

print(cnt)