import sys
read = sys.stdin.readline

s = read().strip()

for i in range(len(s)):
    # 앞을 줄여가면서 부분적으로 있는 팰린드롬 찾기
    if s[i:] == s[i:][::-1]:
        # 팰린드롬 전까지의 문자열을 뒤집어 원래 문자열 뒤에 붙임 -> +i
        print(len(s)+i)
        break
