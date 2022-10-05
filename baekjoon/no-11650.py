
# 11650번

# 2차원 평면 위의 점 N개가 주어진다.
#
# 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

import sys

N = int(sys.stdin.readline())

li = []
for _ in range(N):
    [x, y] = map(int, sys.stdin.readline().split())
    li.append([x, y])

sortLi = sorted(li)

for i in range(N):
    print(sortLi[i][0], sortLi[i][1])