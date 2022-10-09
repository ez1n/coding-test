
# 1715번

# 각 묶음의 카드의 수를 A, B라 하면 보통 두 묶음을 합쳐서 하나로 만드는 데에는 A+B 번의 비교를 해야 한다.
#
# N개의 숫자 카드 묶음의 각각의 크기가 주어질 때, 최소한 몇 번의 비교가 필요한지를 구하는 프로그램을 작성하시오.

import sys, heapq

input = sys.stdin.readline

n = int(input())
q = []
count = 0

for _ in range(n):
    q.append(int(input()))

heapq.heapify(q)
if len(q) == 1:
    count = 0
else:
    while len(q) > 1:
        num_1 = heapq.heappop(q)
        num_2 = heapq.heappop(q)
        count += num_1 + num_2
        heapq.heappush(q, num_1 + num_2)

print(count)