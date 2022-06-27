def solution(lottos, win_nums):
    answer = [0, 0]
    zero = 0
    correct = 0
    for i in range(len(lottos)):
        if lottos[i] == 0:
            zero += 1
        elif lottos[i] in win_nums:
            correct += 1

    low = correct
    high = correct + zero
    if low == 0:
        answer[1] = 6
    else:
        answer[1] = 7-low
    if high == 0:
        answer[0] = 6
    else:
        answer[0] = 7-high

    return answer


lottos = [44, 1, 0, 0, 31, 25]
win_nums = [31, 10, 45, 1, 6, 19]
print(solution(lottos, win_nums))
