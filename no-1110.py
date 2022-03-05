
# 1110번

# 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다.
# 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다.
#
#N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.

num = input()
N = int(num)

i = 0
while True :
    i += 1

    if int(num) < 10 :
        value = num
    else :
        value = str(int(num[0]) + int(num[1]))

    num = num[-1] + value[-1]
    if N == int(num): break;

print(i)
