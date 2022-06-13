import sys
read = sys.stdin.readline


def make_table(p):
    l = len(p)
    table = [0] * l
    j = 0

    for i in range(1, l):
        # j>0 :이전에 일치했던 것이 한 개라도 있었던 경우
        # 3. j>0인데 일치하지 않으면 j(인덱스)를 table[j-1](이전 값)으로 변경
        while j > 0 and p[i] != p[j]:
            j = table[j-1]
        # 1. p[i]와 p[j]가 일치하면 j, i 둘 다 한 칸씩 이동
        # table[i]는 j(인덱스)값
        # 2. 일치하지 않으면 i만 이동(for문에 의해)
        if p[i] == p[j]:
            j += 1
            table[i] = j
    return table


def kmp(s, p):
    table = make_table(p)
    s_l = len(s)
    p_l = len(p)

    j = 0
    for i in range(s_l):
        while j > 0 and s[i] != p[j]:
            j = table[j-1]
        if s[i] == p[j]:
            if j == p_l - 1:
                return 1
            else:
                j += 1

    return 0


s = read().strip()
p = read().strip()
print(kmp(s, p))
# if p in s:
#     print(1)
# else:
#     print(0)
