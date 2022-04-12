import sys
read = sys.stdin.readline

paper = read().strip()
search = read().strip()

cnt = 0
l = len(search)
idx = 0
while True:
    if search in paper:
        idx = paper.index(search)
        paper = paper[idx+l:]
        cnt += 1
    else:
        break

print(cnt)
