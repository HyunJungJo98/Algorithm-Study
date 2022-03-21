
from collections import deque

tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]
#tickets = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]

ticket = dict()

for a, b in tickets :
    if a in ticket :
        ticket[a].append(b)
    else :
        ticket[a] = [b]

keys = ticket.keys()
for i in keys :
    ticket[i].sort(reverse=True)

s = ['ICN']

path = []

while s :
    top = s[-1]
    if top not in ticket or len(ticket[top]) == 0:
        path.append(s.pop())
    else :
        s.append(ticket[top][-1])
        ticket[top] = ticket[top][:-1]

answer = path[::-1]
print(answer)
