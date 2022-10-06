
# 1026번

# 길이가 N인 정수 배열 A와 B가 있다. 다음과 같이 함수 S를 정의하자.

# S = A[0] × B[0] + ... + A[N-1] × B[N-1]

# S의 값을 가장 작게 만들기 위해 A의 수를 재배열하자.
# 단, B에 있는 수는 재배열하면 안 된다.

# S의 최솟값을 출력하는 프로그램을 작성하시오.

## 내 풀이

import sys

n = int(sys.stdin.readline())
a = sorted(list(map(int, sys.stdin.readline().split())))
b = list(map(int, sys.stdin.readline().split()))
c = b.copy()
d = [0 for _ in range(len(a))]

for i in range(len(a)):
    num = b.index(max(c))
    d[num] = a[i]
    c.remove(max(c))

result = 0
for i in range(n):
    result += d[i] * b[i]
print(result)

## 다른 풀이

n = int(sys.stdin.readline())
a = list(map(int, sys.stdin.readline().split()))
b = list(map(int, sys.stdin.readline().split()))

result = 0

for i in range(n):
    result += min(a) * max(b)
    a.remove(min(a))
    b.remove(max(b))

print(result)