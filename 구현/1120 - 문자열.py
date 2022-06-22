import sys
read = sys.stdin.readline

a, b = read().split()


def check(a, b):
    result = 0
    for i in range(len(a)):
        if a[i] != b[i]:
            if a[i] == '0':
                continue
            result += 1
    return result


answer = 51
for i in range(len(b)-len(a)+1):
    copy_a = '0'*i + a + '0'*(len(b)-len(a)-i)
    minus = check(copy_a, b)
    if minus < answer:
        answer = minus

print(answer)
