numbers = "011"
#numbers = list(map(int, list(numbers)))

number = list(numbers)
visited = [0] * len(number)

def isp(num) :
    if num == 1 or num == 0 :
        return False
    else :
        cnt = 0
        #prime 구할 때 절반까지만 구하기
        for i in range(2, num//2+1) :
            if num%i == 0 :
                cnt += 1
        if cnt == 0 :
            return True
        else :
            return False


def dfs(a, numArray) :
    if len(numArray) == a :
        result.add(int(''.join(numArray)))
        return 
    else :
        for i in range(len(number)) :
            if visited[i] == 0 :
                numArray.append(number[i])
                visited[i] = 1
                dfs(a, numArray)
                numArray.pop()
                visited[i]= 0

result = set()
for i in range(1, len(number)+1) :
    # i == 자리수
    numArray = []
    dfs(i, numArray)

result2 = list(result)
result3 = []
for i in range(len(result2)) :
    print(i)
    if isp(result2[i]) :
        result3.append(result2[i])

print(result3)