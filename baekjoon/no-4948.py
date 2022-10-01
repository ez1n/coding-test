
# 4948번

# 베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.
#
# 자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오.

while True:
    n = int(input())
    if n == 0:
        break

    k = [True for i in range(2 * n + 1)]

    for j in range(2, int((2 * n) ** 0.5) + 1):
        if k[j]:
            for z in range(j * 2, 2 * n+1, j):
                k[z] = False

    print(k[n+1:].count(True))

