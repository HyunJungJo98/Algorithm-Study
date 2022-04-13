import sys
read = sys.stdin.readline

s = read().strip()

s = s.replace('dz=', 'A')
s = s.replace('c=', 'B')
s = s.replace('c-', 'C')
s = s.replace('d-', 'D')
s = s.replace('lj', 'E')
s = s.replace('nj', 'F')
s = s.replace('s=', 'G')
s = s.replace('z=', 'H')

print(len(s))