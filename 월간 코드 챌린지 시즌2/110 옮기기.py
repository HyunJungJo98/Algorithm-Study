s = ["1110","100111100","0111111010"]

result = []

for i in s :
    stack = []
    cnt_110 = 0
    for j in i :
        #stack에 넣고 110을 만날 때마다 stack에서 pop
        if len(stack) >=2 and  j == '0' and stack[-1]=='1' and stack[-2]=='1' :
            cnt_110 += 1
            stack.pop()
            stack.pop()
        else :
            stack.append(j)

    cnt_1 = 0
    #스택에서 제일 뒤에 있는 0 뒤에 110을 stack에서 pop한 개수만큼 넣어줌
    #0일때 for문을 빠져나가므로 그 전까지는 다 1을 만남 => break하기 전까지
    #개수를 세고 그 개수만큼 1을 넣어줌
    for s in stack[::-1] :
        if s == '0' :
            break
        else :
            cnt_1 += 1
    result.append("".join(stack[:len(stack)-cnt_1]) + "110" * cnt_110 + '1'*cnt_1)

