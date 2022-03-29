
# k번째 수

# N명의 학생의 수학점수가 주어집니다.
# N명의 학생들의 평균(소수 첫째자리 반올림)을 구하고,
# N명의 학생 중 평균에 가장 가까운 학생은 몇 번째 학생인지 출력하는 프로그램을 작성하세요.
#
# 평균과 가장 가까운 점수가 여러 개일 경우 먼저 점수가 높은 학생의 번호를 답으로 하고, 높
# 은 점수를 가진 학생이 여러 명일 경우 그 중 학생번호가 빠른 학생의 번호를 답으로 합니다.

import sys

N = int(sys.stdin.readline())
number = list(map(int, sys.stdin.readline().split()))
m = sum(number)/len(number)

score = []
for i in number:
    score.append(abs(i-m))

print(round(m), score.index(min(score)))


