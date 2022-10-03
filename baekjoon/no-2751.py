
# 2751번

# N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

import sys

N = int(sys.stdin.readline())

li = []
for i in range(N):
    li.append(int(sys.stdin.readline()))

for i in sorted(li):
    sys.stdout.write(str(i) + '\n')

