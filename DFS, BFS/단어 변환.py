from collections import deque
begin = "hit"
target = "cog"
#words = ["hot", "dot", "dog", "lot", "log"]
words = ["hot", "dot", "dog", "lot", "log", "cog"]

visited = [0] * len(words)

q = deque()
q.append((begin, 0))

def isCorrect(a, b) :
    cnt = 0
    for i in range(len(a)):
        if a[i] != b[i] :
            cnt += 1
    if cnt == 1 :
        return True
    else :
        return False


def bfs() :
    while q :
        a, b = q.popleft()
        if a == target :
            return b

        for i in range(len(words)) :
            if isCorrect(a, words[i]) and visited[i] == 0:
                q.append((words[i], b+1))
                visited[i] = 1


def solution(begin, target, words):
    answer = 0
    if target in words :
        answer = bfs()
    return answer

print(solution(begin, target, words))