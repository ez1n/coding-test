
# 1978번

# 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
#
# 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다.
# 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.


import sys

N = int(input())
numbers = list(map(int,sys.stdin.readline().split()))

score = 0
for num in numbers:
    li = []
    for i in range(1, num+1):
        if num % i == 0:
            li.append(i)
        else:
            pass
    if len(li) == 2:
        score += 1

print(score)



