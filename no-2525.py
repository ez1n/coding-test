
# 2525번

# 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때,
# 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.

A, B = map(int, input().split())
C = int(input())

if B + C >= 60 :
    hour = (B + C) // 60
    minutes =  (B + C) % 60
    if A + hour > 23 :
       print((A + hour) - 24, minutes)
    else :
        print(A + hour, minutes)
else :
    print(A, B + C)


