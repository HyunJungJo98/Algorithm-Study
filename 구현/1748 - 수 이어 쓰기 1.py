import sys
read = sys.stdin.readline

n = read().strip()
d = [9]

if len(n) < 2:
    print(n)
else:
    length = len(n)
    # 최대 9번 돌음
    for i in range(2, length):
        # 각 자리수의 길이를 넣어줌
        # 한 자리수는 9, 두 자리수는 180, 세 자리수는 2700
        d.append(9 * i*10**(i-1))
    result = sum(d)
    # n의 길이만큼 0을 붙여서 빼줌
    # ex) 120이면 100을 뺌, 1001이면 1000을 뺌
    # 뺀 나머지 + 1을 n의 길이만큼 곱해서 더해주기
    result += (int(n) - 10**(length-1) + 1) * length
    print(result)
