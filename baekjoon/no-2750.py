
# 2750번

# N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

N = int(input())

sortList = []
for i in range(N):
    a = int(input())
    sortList.append(a)

for i in range(N):
    for j in range(i + 1, N):
        if sortList[i] > sortList[j]:
            sortList[i], sortList[j] = sortList[j], sortList[i]

for i in sortList:
    print(i)

