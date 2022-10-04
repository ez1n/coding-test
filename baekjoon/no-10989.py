
# 10989번

# N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
#
# 수의 범위가 작은 경우 - counting sort (계수 정렬)

import sys

N = int(sys.stdin.readline())

li = [0 for _ in range(10001)]

for _ in range(N):
    n = int(sys.stdin.readline())
    li[n] += 1

for i in range(1, 10001):
    n = li[i]
    for j in range(n):
        print(i)