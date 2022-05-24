import sys
read = sys.stdin.readline

t = int(read())

def check2(string, left, right) :
    while left < right :
        if string[left] == string[right] :
            left += 1
            right -= 1
        else :
            return False
    return True

# 투포인터로 양쪽에서 줄어들면서 같은지 확인
def check(string, left, right) :
    while left < right :
        if string[left] == string[right] :
            left += 1
            right -= 1
        else :
            # 같지 않으면 그 문자열 빼고 확인
            c1 = check2(string, left+1, right)
            c2 = check2(string, left, right-1)
            if c1 or c2 :
                return 1
            else :
                return 2
    return 0

for i in range(t) :
    s = read().strip()
    left, right = 0, len(s)-1
    result = check(s, left, right)
    print(result)
