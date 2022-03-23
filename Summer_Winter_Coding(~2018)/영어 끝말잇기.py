n = 5
words = ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]

l = []

turn = 1
for i in range(1, len(words)) :
    if i%n == 0 :
        turn += 1
    if words[i] in words[:i] or words[i-1][len(words[i-1])-1] != words[i][0]:
        #l에 탈락한 사람, 몇 번째 차례인지 붙이기
        person = i%n + 1
        l.append([person, turn])
        break

if l == [] :
    print ([0, 0])
else :
    print(l[0])