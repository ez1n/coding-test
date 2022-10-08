
# 2812번

# N자리 숫자가 주어졌을 때, 여기서 숫자 K개를 지워서 얻을 수 있는 가장 큰 수를 구하는 프로그램을 작성하시오.

import sys
input = sys.stdin.readline

n, k = map(int, input().split())
a = input().rstrip()
stack = []

for i in a:
    while stack and stack[-1] < i and k > 0:
        stack.pop()
        k -= 1
    stack.append(i)
if k > 0:
    print(''.join(stack[:-k]))
else:
    print(''.join(stack))