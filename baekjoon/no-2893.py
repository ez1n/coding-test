
# 2893번

# 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
#
# 상근이는 최대한 적은 봉지를 들고 가려고 한다.
#
# 상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때,
# 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.


import sys

N = int(sys.stdin.readline())

li = []
for i in range(N // 5  + 1):
    if (N - 5 * i) % 3 == 0:
        li.append(i)

if len(li) == 0:
    print(-1)
else:
    f = max(li)
    t = (N - 5 * f) // 3
    print(f + t)



