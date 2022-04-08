from itertools import combinations

expression = "100-200*300-500+20"

def oper(a, b, o) :
    if o == '+' :
        return a+b
    elif o == '-' :
        return a-b
    elif o == '*' :
        return a*b

def cal(expression, o_p) :
    arr = []
    idx = 0
    # 피연산자와 연산자로 자르기
    for i in range(len(expression)) :
        if expression[i].isdigit() == False :
            arr.append(int(expression[idx:i]))
            arr.append(expression[i])
            idx = i+1
    arr.append(int(expression[idx:]))
    print(arr)

    # 우선순위 높은 것부터 연산자 하나씩 반복
    # stack을 이용해서 1차로 계산, 그걸 arr에 붙여서 다시 계산, 반복
    for i in range(len(o_p)) :
        stack = []
        # 남은 피연산자가 없을 때까지 반복함
        while len(arr) != 0 :
            current = arr.pop(0)
            # 현재 뽑은 것이 현재 우선순위인 연산자와 같을 때
            if current == o_p[i] :
                # 연산자의 이전 피연산자와 다음 피연산자를 계산해서 stack에 붙여줌
                stack.append(oper(stack.pop(), arr.pop(0), o_p[i]))
            else :
                stack.append(current)
            print('stack :', stack)
            print('arr: ', arr)
        arr = stack
        print('stack2 :', stack)
        print('arr2: ', arr)
        
    return abs(arr[0])

operation = ['-', '*', '+']

o_p = []
p = []
visited = [0] * 3

# 연산자 순위 조합 구하기
def pr(cnt, o_p) :
    if cnt == len(operation) :
        o_p.append(tuple(p))
        return
    for i in range(len(operation)) :
        if visited[i] == 0 :
            p.append(operation[i])
            visited[i] = 1
            pr(cnt+1, o_p)
            p.pop()
            visited[i] = 0
pr(0, o_p)

result = []
for i in range(len(o_p)) :
    result.append(cal(expression, o_p[i]))

print(max(result))