
# 25405번

# 2022 연세대학교 미래캠퍼스 슬기로운 코딩생활에 $N$명의 학생들이 응시했다.

# 이들 중 점수가 가장 높은 k명은 상을 받을 것이다. 이 때, 상을 받는 커트라인이 몇 점인지 구하라.

# 커트라인이란 상을 받는 사람들 중 점수가 가장 가장 낮은 사람의 점수를 말한다.

import sys

N, k = map(int, sys.stdin.readline().split())

x = []
for i in map(int, sys.stdin.readline().split()):
    x.append(i)

print(sorted(x, reverse=True)[k-1])