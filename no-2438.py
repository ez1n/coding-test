
# 2438번

# 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

N = int(input())

for i in range(N) :
    print("*"*(i+1))



# 2439번

# 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
#
# 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

N = int(input())

for i in range(N) :
    print(("*" * (i+1)).rjust(N))



