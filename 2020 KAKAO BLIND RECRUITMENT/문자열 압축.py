s = "a"

l = 1
result = [s]
# 몇 개로 자를지, 1 ~ 문자열 절반 길이
# l 단위로 자르기
while l <= len(s)//2:
    prev = s[:l]
    i = l
    arr = ""
    count = 1
    while i <= len(s):
        # 마지막 남은 글자가 l보다 작을 수 있으므로
        if len(s[i:i+l]) != l:
            arr += s[i:i+l]
        # 이전 문자와 같을 때
        if s[i:i+l] == prev:
            count += 1
        # 이전 문자와 같지 않을 때
        else:
            # 이전 문자를 압축할 수 없을 때
            if count == 1:
                arr += prev
            # 이전 문자를 압축할 수 있을 때
            else:
                arr += str(count)
                arr += prev
                count = 1
        prev = s[i:i+l]
        i += l
    # l개 단위로 압축한 문자열들을 result에 저장
    result.append(arr)
    l += 1

min_lenght = len(result[0])
for i in range(len(result)):
    if len(result[i]) < min_lenght:
        min_lenght = len(result[i])
print(min_lenght)
