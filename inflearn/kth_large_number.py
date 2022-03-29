
# k번째 수

# 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다.
# 같은 숫자의 카드가 여러장 있을 수 있습니다.
#
# 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다.
# 3장을 뽑을 수 있는 모든 경우를 기록합니다.
#
# 기록한 값 중 K번째로 큰 수를 출력하는 프로그램을 작성하세요.

import sys

N, K = map(int, sys.stdin.readline().split())

number = list(map(int, sys.stdin.readline().split()))
num = list(set(number))
num.sort(reverse=True)
print(num)
print(num[K-1])
