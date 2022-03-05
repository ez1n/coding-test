
# 10951번

# 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
#
# 종결규칙 X

result = []
while True :
    try :
        A, B = map(int, input().split())
        print(A+B)
    except : break;


