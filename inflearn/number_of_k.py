
# k번째 수

# N개의 숫자로 이루어진 숫자열이 주어지면
# 해당 숫자열중에서 s번째부터 e번째 까지의 수를 오름 차순 정렬했을 때
# k번째로 나타나는 숫자를 출력하는 프로그램을 작성하세요.

import sys

T = int(input())
for i in range(T):
    N, s, e, k = map(int, sys.stdin.readline().split())
    numbers = list(map(int,sys.stdin.readline().split()))

    num = sorted(numbers[s-1:e])
    print(num[k-1])


