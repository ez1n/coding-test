
# 1193번
import sys

X = int(sys.stdin.readline())

if X == 1:
    print("1/1")  # X == 1인 경우

else:  # X >= 2 인 경우
    value_a, value_b = 0, 0
    i, j = 1, 1

    while True:  # 분자
        value_a += (4 * i - 3)
        if X <= value_a:
            A = [k + 1 for k in range(2 * i - 1)] + [2 * i - 2 - k for k in range(2 * i - 2)]
            c = 1
            for l in range(1,i):
                c += len(A) - 4 * l
            a = A[X-c]
            break;
        i += 1

    while True:  # 분모
        value_b += (4 * j - 1)
        if X <= value_b:
            B = [k + 1 for k in range(2 * j)] + [2 * j - 1 - k for k in range(2 * j - 1)]
            c = 1
            for l in range(1, j):
                c += len(B) - 4 * l
            b = B[X - c]
            break;
        j += 1

    print("{}/{}".format(a,b))
