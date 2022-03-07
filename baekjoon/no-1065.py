# 1065번

# 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
#  N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

# 한수 구하는 함수
def h(x):
    if x < 10:
        return x
    else:
        a = str(x)
        d = int(a[1]) - int(a[0])
        number = ""
        for n in range(len(a)):  # 등차 수열 확인
            if int(a[n]) == int(a[0]) + n * d:
                number += a[n]

        if x == int(number): return x


N = int(input())
li = []
for i in range(1, N + 1):
    if type(h(i)) == int:  # 한수가 아닌 값은 "None"으로 나오기 때문에 자료형이 정수인 요소만 추가
        li.append(h(i))
print(len(li))
