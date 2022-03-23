numbers = [2,7]

def f(x):
    if x % 2 == 0:
        return x+1
    
    else:
        y = '0' + bin(x)[2:]
        idx = y.rfind('0')
        y = list(y)
        y[idx] = '1'
        y[idx+1] = '0'
                
        return int(''.join(y), 2)

def solution(numbers):
    
    answer = [f(i) for i in numbers]
        
    return answer

print(solution(numbers))

# def solution(numbers):
#     answer = []
#     for number in numbers:
        
#         bin_number = list('0' + bin(number)[2:])
#         idx = ''.join(bin_number).rfind('0')
#         bin_number[idx] = '1'
        
#         #홀수일땐 idx의 다음 숫자를 0으로 바꿔준다.
#         if number%2!=0:
#             bin_number[idx+1]='0'
#         answer.append(int("".join(bin_number),2))
#     return answer