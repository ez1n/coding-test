
# 15552번

# 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

import sys
T = int(sys.stdin.readline())
li = []

for i in range(T) :
    li.append(list(map(int,sys.stdin.readline().split())))

for i in range(T) :
    print(sum(li[i]))