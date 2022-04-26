number = "4177252841"
k = 4

stack = []

for i in range(len(number)):
    if len(stack) == 0:
        stack.append(number[i])
        continue

    if k > 0:
        # 스택에 있는 값이 자기보다 크면
        # 무조건 들어감
        # 스택에 있는 값이 자기보다 작으면
        # while문을 돌면서 자기보다 큰 수를 만날 때까지 stack을 pop
        # 계속 pop하다가 더이상 pop할게 없거나 k의 수만큼 다 pop했으면 break
        while stack[-1] < number[i]:
            stack.pop()
            k -= 1
            if len(stack) == 0 or k <= 0:
                break
    # k가 0보다 크면 앞에 있는 수 중에 자기보다 큰 수를 다 pop하고 자기를 stack에 붙이기
    # k가 0보다 작거나 같으면 이미 뺄 수 있는 횟수를 다 사용했으므로 그냥 붙임
    stack.append(number[i])

# k가 0보다 큰 경우 : 이미 큰 수 순서대로 들어가 있는데
# 더 빼야 하므로 뒤에 있는 수부터 뺌(뒤에 있는 수가 제일 작을 것이므로)
if k > 0:
    stack = stack[:-k]

print(''.join(stack))
