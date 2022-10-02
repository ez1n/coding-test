# 9020번

# 골드바흐의 추측은 유명한 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다는 것이다.
# 이러한 수를 골드바흐 수라고 한다. 또, 짝수를 두 소수의 합으로 나타내는 표현을 그 수의 골드바흐 파티션이라고 한다.
#
# 2보다 큰 짝수 n이 주어졌을 때, n의 골드바흐 파티션을 출력하는 프로그램을 작성하시오.
# 만약 가능한 n의 골드바흐 파티션이 여러 가지인 경우에는 두 소수의 차이가 가장 작은 것을 출력한다.

T = int(input())

def is_prime(x):
    for i in range(2, int(x ** 0.5) + 1):
        if x < 2:
            return False
        if x % i == 0:
            return False
    return True

for _ in range(T):
    n = int(input())
    a, b = n // 2, n // 2
    while True:
        if is_prime(a) and is_prime(b):
            break
        a -= 1
        b += 1

    print(a, b)
