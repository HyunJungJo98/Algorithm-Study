import sys
read = sys.stdin.readline

word = read().strip()
word = word.upper()

# word의 길이가 길어져도 count 함수를 26번 실행하도록 하기(연산횟수 줄이기)
dic = {}

for i in range(26):
    dic[chr(65+i)] = 0

max_count = 0
result = ""

for a in dic.keys():
    if word.count(a) > max_count:
        max_count = word.count(a)
        result = a
    elif word.count(a) == max_count:
        result = "?"

print(result)
