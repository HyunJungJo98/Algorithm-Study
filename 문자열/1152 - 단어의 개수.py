import sys
read = sys.stdin.readline

s = read().strip().split(" ")

if(s[0] == ""):
    print(0)
else :
    print(len(s))