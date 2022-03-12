
# 2292번

# 중앙의 방 1부터 시작해서 이웃하는 방에 돌아가면서 1씩 증가하는 번호를 주소로 매길 수 있다.
# 숫자 N이 주어졌을 때, 벌집의 중앙 1에서 N번 방까지 최소 개수의 방을 지나서 갈 때
# 몇 개의 방을 지나가는지(시작과 끝을 포함하여)를 계산하는 프로그램을 작성하시오.

import sys

N = int(sys.stdin.readline())
count = 1  # 지나야 하는 방의 최소 갯수
num = 1  # 초깃값
while N > num:
    num += 6 * count
    count += 1
print(count)

