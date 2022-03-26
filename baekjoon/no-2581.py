
# 2581번

# 자연수 M과 N이 주어질 때
# M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오.


import sys

M = int(sys.stdin.readline())
N = int(sys.stdin.readline())

score_li = []
for num in range(M, N+1):
    li = []
    for i in range(1, num+1):
        if num % i == 0:
            li.append(i)
        else:
            pass
    if len(li) == 2:
        score_li.append(num)

if len(score_li) == 0:
    print(-1)
else:
    print(sum(score_li))
    print(min(score_li))

