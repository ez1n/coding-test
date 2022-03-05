
# 8958번

# 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.
# OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

T = int(input())

for i in range(T):
    result = list(input())
    score = 0
    li = []
    for j in range(len(result)):
        if result[j] == "O":
            if result[j] != result[j - 1]:
                li.append(1)
                score = 1
            if result[j] == result[j - 1]:
                score += 1
                li.append(score)
        else:
            pass

    print(sum(li))


