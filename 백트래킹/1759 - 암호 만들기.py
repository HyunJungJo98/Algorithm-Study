import sys
read = sys.stdin.readline

def dfs(start) :
    if len(code) == l and len(set(code)&vowels) > 0 and len(set(code)&consonants) > 1:
        print(''.join(code))
        return
    
    for i in range(start, c) :
        code.append(alphabet[i])
        dfs(i+1)
        code.pop()
    

l, c = map(int, read().split())
alphabet = list(read().split())

alphabet.sort()
code = []
vowels = {'a', 'e', 'i', 'o', 'u'}
consonants = {x for x in alphabet if x not in vowels}
'''
위와 같음
consonants = set()
for x in alphabet :
    if x not in vowels:
        consonants.add(x)
'''

dfs(0)

'''
사용자에게 받은 알파벳을 모음과 자음으로 분리
교집합을 이용하여 모음의 개수와 자음의 개수를 확인하고
만족하면 출력하기
집합을 이용할 생각을 못해서 틀림
'''