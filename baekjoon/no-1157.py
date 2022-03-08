
# 1157번

#알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오.
# 단, 대문자와 소문자를 구분하지 않는다.

from collections import Counter

A = input()
li = []
for value in A:
    li.append(value.upper())
count = dict(Counter(li))
count_num = [key for num in [max(count.values())] for key,val in count.items() if val == num]

if len(count_num) == 1:
    print(count_num[0])
else:
    print("?")


