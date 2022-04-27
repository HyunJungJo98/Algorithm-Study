name = "SAAAAAARRM"

result = 0
# 기본으로 움직이는 횟수 : 1부터 len(name)까지
# 무조건 오른쪽으로 직진하는 경우
min_move = len(name)-1
# 연속되는 A의 개수
A_num = 0

# 맨 끝이 A로 끝나는 경우
# 기본으로 움직이는 횟수를 줄일 수 있음
while name[min_move] == 'A' and min_move > 0:
    min_move -= 1

if min_move < 0:
    result = 0
    exit()

for i in range(len(name)):
    num = ord(name[i])-65
    result += min(num, 26-num)

    A_num = i+1
    # 현재 알파벳 다음 게 A이면
    # 연속되는 A의 개수 구하기
    while A_num < len(name) and name[A_num] == 'A':
        A_num += 1

    # 1. 기존 방법 : 오른쪽으로 직진하는 방법
    # 2. A가 나오면 다시 뒤로 가는 경우 -> 왔던 만큼 다시 가기(i*2) +
    # 뒤에서부터 연속된 A가 끝나는 지점까지(len(name)-A_num) 왼쪽으로 직진
    # 3. A가 나오면 다시 뒤로 가는 경우 but 오른쪽부터 시작
    # 셋 중에 더 작은 경우를 선택
    min_move = min([min_move, 2 * i + len(name) -
                   A_num, i + 2 * (len(name) - A_num)])

result += min_move

print(result)
