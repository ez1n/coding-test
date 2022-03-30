
# 1316번

# 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다.
#
# 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.

import sys

num = int(sys.stdin.readline())
count = 0

for i in range(num):
    word = sys.stdin.readline()
    cnt = 0
    for j in set(word):
        li = [index for index,value in enumerate(word) if value == j] # 같은 단어의 index
        if len(li) != 1: # 같은 단어가 여러개 존재하는 경우
            for n in range(len(li)-1):
                if li[n+1] - li[n] > 1: # 단어의 각 index 간의 차이가 1보다 큰 경우 (연속되어 나타나지 않는 경우)
                    cnt += 1

    if cnt == 0:
        count += 1

print(count)


