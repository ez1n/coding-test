
# 4673번

# 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자.
# n을 d(n)의 생성자라고 하고, 생성자가 없는 숫자를 셀프 넘버라고 한다.
# 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

def d(n):
    for i in str(n):
        n += int(i)
    return n

num = set(range(1, 10000))
li = set()
for n in range(1, 10000):
    li.add(d(n))

for value in sorted(num - li):
    print(value)

