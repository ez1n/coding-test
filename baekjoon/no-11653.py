
# 11653번

# 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

N = int(input())

if N == 1:
    print('')
for i in range(2,N+1):
    while N % i == 0:
        N = N // i
        print(i)

