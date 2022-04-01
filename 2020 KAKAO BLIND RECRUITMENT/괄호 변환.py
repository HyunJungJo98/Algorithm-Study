p = "()))((()"


def change(u):
    print('u : ', u)
    if len(u) == 2:
        return ""
    u = u[1:len(u)-1]
    new_u = ""
    for i in range(len(u)):
        if u[i] == '(':
            new_u += ')'
        else:
            new_u += '('
    return new_u


def dfs(p):
    if p == "":
        return ""

    stack = []
    cnt1 = 0
    cnt2 = 0
    u = ""
    for i in range(len(p)):
        if p[i] == '(':
            stack.append(p[i])
            cnt1 += 1
        else:
            if len(stack) == 0 or stack[-1] == ')':
                stack.append(p[i])
            else:
                stack.pop()
            cnt2 += 1
        u += p[i]
        if cnt1 == cnt2:
            break

    if cnt1*2 == len(p):
        v = ""
    else:
        v = p[cnt1*2:]
    print('u:', u)
    print('v:', v)
    print(stack)
    # 올바른 문자열
    if len(stack) == 0:
        return u + dfs(v)
    # 올바르지 않은 문자열
    else:
        a = '(' + dfs(v) + ')' + change(u)
        print('a:', a)
        print('changeu : ', change(u))
        return a


print(dfs(p))
